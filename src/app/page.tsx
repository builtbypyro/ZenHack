"use client";
import React from "react";
import Image from "next/image";
import { WavyBackground } from "../components/ui/wavy-background";
import { FloatingNav } from "../components/ui/floating-navbar";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
import { Button } from "@/components/ui/button"
import Link from "next/link"



import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconHome,
  IconMessage,
  IconUser
} from "@tabler/icons-react";

const DummyContent = () => {
  return (
    <>
    
    <WavyBackground className="max-w-4xl mx-auto pb-48">
      
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        ZenHack
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-bold inter-var text-center">
       9.7.24 - 9.8.24 @ UNT
       </p>

      <p className="text-base md:text-lg mt-6 text-white font-normal inter-var text-center">
        A hackathon for the next generation of inventors, high school students, dedicated to facilitating the creation of solutions for various problems in modern society.
      </p>
      <span className="flex justify-center mt-10 gap-10"> 
        <Button asChild variant={"secondary"}>
          <Link href="https://forms.gle/2oDZ6pphF4nTWoL58">Sign Up</Link>
        </Button>
        <Button asChild>
          <Link href="mailto:trisanthsrini@gmail.com">Sponsor Us</Link>
        </Button>
      </span> 
      

    </WavyBackground>
      </>
  );
}



export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Sign Up",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Sponsorships",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}



