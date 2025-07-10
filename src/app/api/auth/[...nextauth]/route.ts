import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { Email: credentials.email },
        });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValid = await bcrypt.compare(credentials.password, user.Password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.UID,
          email: user.Email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { Email: user.email },
        });
        if (existingUser) {
          // Nếu user này đã đăng ký bằng email/password (Password khác rỗng), chặn đăng nhập Google
          if (existingUser.Password && existingUser.Password !== "") {
            throw new Error("Email already registered with credentials");
          }
          // Nếu user này là user Google (Password rỗng), cho phép đăng nhập lại
          return true;
        } else {
          // Nếu chưa có, tạo user mới trong database
          await prisma.user.create({
            data: {
              Email: user.email,
              Username: user.name || 'GoogleUser',
              Password: '', // Google user không có password
              Image: user.image || '',
            },
          });
          return true;
        }
      }
      // Đăng nhập credentials hoặc provider khác
      return true;
    },
    async jwt({ token, user, account, profile }) {
      // Lưu provider và email vào token để dùng cho các lần sau
      if (account?.provider) token.provider = account.provider;
      if (user?.email) token.email = user.email;
      // Đăng nhập Google lần đầu
      if (user && (account?.provider === "google")) {
        const dbUser = await prisma.user.findUnique({ where: { Email: user.email } });
        if (dbUser) token.uid = dbUser.UID;
      }
      // Đăng nhập Google các lần sau (không có user, chỉ có token)
      else if (!user && token.email && token.provider === "google") {
        const dbUser = await prisma.user.findUnique({ where: { Email: token.email as string } });
        if (dbUser) token.uid = dbUser.UID;
      }
      // Đăng nhập credentials
      else if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.uid = token.uid as string;
        if (token.picture || token.image) {
          (session.user as any).image = (token.picture as string) || (token.image as string);
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth",
    error: "/auth/error",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
