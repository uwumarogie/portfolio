import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col">
        <h1>Hi, I'm Phillips, CS Student & Software Engineer</h1>
        <span>
          A CS student with 2 years of development experience, I craft code that
          brings ideas to life. I balance studies with impactful work. Let's
          build the future.
        </span>
      </div>

      <div className="">
        <Image
          src="/images/phillips.jpg"
          alt="Phillips Uwumarogie"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
