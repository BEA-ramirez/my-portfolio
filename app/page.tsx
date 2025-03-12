"use client";
import React from "react";

import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full flex justify-end items-center gap-5 p-5 border">
        <NavBar />
        <Button variant="outline" asChild>
          <Link href="/">Resume</Link>
        </Button>
      </div>

      <div className="w-full border mt-[5rem] ml-[15rem]">
        <h5 className="">Hi, my name is</h5>
        <h1 className="font-bold text-5xl mt-5">BEA Ramirez.</h1>
        <h2 className="font-bold text-5xl mt-2">
          Curious coder, problem solver.
        </h2>
        <p className="line-clamp-3 w-[30rem] mt-10">
          I'm a 3rd year college student at Visayas State University, focused on
          creating innovative solutions through coding and web development to
          tackle real-world challenges.
        </p>
        <Button variant="outline" asChild className="mt-10 ">
          <Link href="/main">Get In Touch</Link>
        </Button>
      </div>
    </div>
  );
}
