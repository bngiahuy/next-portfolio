'use client'
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav 
        navItems={[
         { name: "Home", link: "/", icon: <IoHomeOutline /> },

        ]}
        /> */}
        <Hero />
        <Grid />
        <Project />
      </div>
    </main>
  );
}
