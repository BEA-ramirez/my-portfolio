import React from "react";

export default function Tag({ title }: { title: string }) {
  return (
    <div className="rounded-lg w-auto px-2 bg-green-300 text-xs">{title}</div>
  );
}
