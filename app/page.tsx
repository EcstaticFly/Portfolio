import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full h-screen">
        <FloatingNav navItems={[{name:'Home', link:'/', icon: <HomeIcon/>}]} />
        <Hero />
      </div>
    </main>
  );
}
