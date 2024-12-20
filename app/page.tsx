'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black h-screen space-y-4  ">
      <Link href="/signup">
        <button className="px-4 py-2 bg-white text-black border rounded-xl hover:bg-stone-300">
          Signup Page
        </button>
      </Link>
      <Link href="/dashboard">
        <button className="px-4 py-2 bg-white text-black border rounded-xl hover:bg-orange-200">
          Dashboard Page 
        </button>
      </Link>
    </div>
  );
}
