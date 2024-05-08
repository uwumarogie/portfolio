import Link from "next/link";
import Image from "next/image";
import React from "react";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <span className="text-navbar-purple hover:text-purple-500 focus:text-purple-500 transition-colors">
        {children}
      </span>
    </Link>
  );
}

function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} width={24} height={24} />
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="flex flex-row bg-structure-gray rounded-full min-w-[450px] h-[60px] items-center backdrop-blur">
      <div className="space-x-6 mx-4">
        <Link href="/" className="text-white">
          phillips
        </Link>
        <NavLink href="/education">Education</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </div>
      <div className="flex space-x-4">
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
    </nav>
  );
}
