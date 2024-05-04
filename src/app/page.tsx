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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";

const DummyContent = () => {
  return (
    <>
    <div className="bg-black">
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
    <div className="p-10">
    <div className="flex justify-center items-center text-center m-10 pt-20">
    <p className="text-xl md:text-3xl lg:text-5xl text-white inter-var text-center">
        Why ZenHack?
       
        
    </p>
    </div>
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] p-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    <div className="flex justify-center items-center text-center m-10 pt-64 ">
    <p className="text-xl md:text-3xl lg:text-5xl text-white inter-var text-center">
        Frequently Asked Questions
       
        
    </p>
    </div>
    
    </div>
    <div className="p-10">
    <Accordion type="multiple"  className="text-white">
      <AccordionItem value="item-1">
        <AccordionTrigger>What kind of experience do I need?</AccordionTrigger>
        <AccordionContent>
         None! You don&apos;t even need to know how to code! Teammates who can design are also valuable!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do I have to stay the entire night?</AccordionTrigger>
        <AccordionContent>
        No, you are free to leave the premises overnight, but make sure that your whole team are present during the daytime portions of our event and judging period.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is a "hackathon"?</AccordionTrigger>
        <AccordionContent>
        A hackathon is an event where teams collaborate on a project, or &quot;hack&quot;, given a certain time limit. At ZenHack, teams of 1-4 collaborate over 24 hours to brainstorm and innovate solutions to real-world problems. Or they are free to work on whatever fun/silly ideas they have in mind, the door is open. We will be inviting various mentors, judges, and guests working in the tech industry to share their expertise and knowledge to our participants. Winning teams will be selected based on various criteria that will be revealed closer to our event.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
    </div>
    </div>

    
      </>
  );
}

const variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: 10,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
};
const variantsSecond = {
  initial: {
    x: 0,
  },
  animate: {
    x: -10,
    rotate: -5,
    transition: {
      duration: 0.2,
    },
  },
};

const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div>
        <Image src={"https://images.unsplash.com/photo-1531845116688-48819b3b68d9?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" width={500} height={500}>

        </Image>
      </motion.div>
    </motion.div>
    </div>
);


const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div>
        <Image src={"https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" width={500} height={500}>

        </Image>
      </motion.div>
    </motion.div>
    </div>
);

const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div>
        <Image src={"https://images.unsplash.com/photo-1517097473408-c0d7983cb95c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" width={500} height={500}>

        </Image>
      </motion.div>
    </motion.div>
    </div>
);
const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div>
        <Image src={"https://images.unsplash.com/photo-1679755992110-a223bb4465b1?q=80&w=3208&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="image" width={500} height={500}>

        </Image>
      </motion.div>
    </motion.div>
    </div>
);
const items = [
  {
    title: "Make Memories",
    description: "Experience an unforgettable event along with like-minded peers.",
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Valuable Mentorship",
    description: "Watch technical workshops from the nations greatest professors.",
    header: < SkeletonTwo/>,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Win Prizes",
    description: "Win a plethora of different prizes totaling almost 2,500$ USD.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Beginner Friendly",
    description:
      "You don&apos;t have a to be a programming genius to participate. We&apos;re here to learn.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];


export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Sign Up",
      link: "https://forms.gle/2oDZ6pphF4nTWoL58",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Sponsorships",
      link: "mailto:sponsors@zenhack.co",
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




export const metadata = {
  title: "ZenHack",
  description: "A hackathon for the next generation of inventors, high school students, dedicated to facilitating the creation of solutions for various problems in modern society.",
}