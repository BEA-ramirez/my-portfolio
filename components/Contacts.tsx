import React from "react";

export default function Contacts({ additional }: { additional: string }) {
  return (
    <div className={`flex gap-5 text-[1.8rem] text-[#8b8b8b] ${additional}`}>
      <i className="fi fi-brands-github " />
      <i className="fi fi-brands-linkedin " />
      <i className="fi fi-brands-facebook" />
      <i className="fi fi-brands-instagram" />
    </div>
  );
}
