"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Logged({ image }) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25"
      >
        Sign out
      </button>
      <Link href={"/dashboard"}>
        <Image
          width={64}
          height={64}
          src={image}
          className="w-14 rounded-full"
          alt=""
          priority
        />
      </Link>
    </li>
  );
}
