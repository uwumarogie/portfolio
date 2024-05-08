import Introduction from "@/app/_components/introduction";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col space-y-16">
      <Introduction />

      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-4xl font-bold"> What I Use</h1>
        <Image
          src="/tech-stack/tech-stack.svg"
          alt="Tech Stack"
          height={700}
          width={700}
        />
      </div>
    </div>
  );
}
