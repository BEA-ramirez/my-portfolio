import React from "react";
import Link from "next/link";

export default function SideComponent({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <div className="w-auto">
      <a href={link} className="flex items-center gap-2 group border">
        <div className="w-[3rem] h-[0.025rem] bg-cyan-200 origin-left scale-x-100 group-hover:scale-x-[2] transition-transform duration-300"></div>
        <h4 className="group-hover:text-blue-400 group-hover:translate-x-[3.5rem] transition-transform duration-300 font-semibold text-[0.9rem]">
          {text}
        </h4>
      </a>
    </div>
  );
}
