import Link from "next/link";
import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex flex-row justify-center items-center space-x-52">
      <div className="flex flex-col">
        <h1 className="text-5xl mb-8">Hi, I'm Phillips,</h1>
        <span className="max-w-[500px] max-h-48 text-2xl text-gray-400 font-thin leading-relaxed">
          A <strong className="text-white">Full Stack Software Engineer</strong>{" "}
          and <strong className="text-white">CS Student</strong> with real world
          experience. I craft code that brings ideas to life. Let's build the
          future together.
        </span>
        <div className="flex flex-row items-center mt-20 space-x-14">
          <Link
            href="placeholder"
            className="bg-white text-black rounded-full items-center text-center p-2"
          >
            Download CV
          </Link>
          <Link
            href="/projects"
            className="font-thin text-normal text-navbar-purple hover:text-purple-500"
          >
            See Projects
          </Link>
        </div>
      </div>

      <div className="">
        <Image
          src="/images/photo-of-me.png"
          alt="Photo of Phillips Uwumarogie"
          height={375}
          width={375}
        />
      </div>
    </div>
  );
}
