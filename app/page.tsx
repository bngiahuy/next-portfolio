import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full max-w-3xl">
        <Hero />
      </div>
    </main>
  );
}
