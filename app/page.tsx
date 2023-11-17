import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 ">
      <Hero />
      <Newest />
    </div>
  );
}
