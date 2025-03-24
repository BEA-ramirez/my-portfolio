import React from "react";
import Link from "next/link";

import SideComponent from "./SideComponent";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-2">
      <SideComponent text="ABOUT" link="#about" />
      <SideComponent text="SKILLS" link="#skills" />
      <SideComponent text="PROJECTS" link="/" />
    </div>
  );
}
