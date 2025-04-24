import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

// Mở rộng kiểu của NextAuth
declare module "next-auth" {
  interface Session {
    user: {
      uid: string;
      email: string;
      name?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string;
  }

  interface JWT {
    uid?: string;
  }
}
