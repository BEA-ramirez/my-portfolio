import React from "react";

export default function Tag({ title }: { title: string }) {
  return (
    <div className="rounded-xl w-auto px-3 py-1 bg-green-300 text-xs">
      {title}
    </div>
  );
}
