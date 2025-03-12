import React from "react";
import "../style/styles.css";


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className="w-full h-[100vh] overflow-hidden">{children}</body>
    </html>
  );
}
