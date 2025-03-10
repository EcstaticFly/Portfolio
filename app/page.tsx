"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import RecentProjects from "../components/RecentProjects";
import useMounted from "./useMountedHook";
import Clients from "@/components/Clients";
import RecentActivities from "@/components/RecentActivities";

const Home = () => {
  const mounted = useMounted();
  if(!mounted) return (
    <div className="h-screen bg-black-100"/>
  );
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects/>
        <Clients/>
        <RecentActivities/>
      </div>
    </main>
  );
};

export default Home;