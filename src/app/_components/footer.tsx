import React from "react";
import { SocialIcon } from "@/app/_components/navbar";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-row min-w-[1100px] rounded-full h-14 bg-structure-gray items-center justify-between p-5">
      <Link href="/" className="text-white">
        phillips
      </Link>{" "}
      <div className="flex justify-end space-x-6">
        <SocialIcon
          href="https://github.com/uwumarogie"
          src="/icons/github.svg"
          alt="GitHub"
        />
        <SocialIcon
          href="https://www.linkedin.com/in/phillips-uwumarogie-80b56ab1/"
          src="/icons/linkedin.svg"
          alt="LinkedIn"
        />
        <SocialIcon href="/contact" src="/icons/mail.svg" alt="Contact" />
      </div>
    </div>
  );
}
