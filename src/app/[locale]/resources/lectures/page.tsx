'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.push('/resources/lectures/overview-of-c-programming');
  }, [router]);

  return null;
}
