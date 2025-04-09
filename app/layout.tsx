import React from "react";
import "../style/styles.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-chubby/css/uicons-regular-chubby.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-chubby/css/uicons-thin-chubby.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-chubby/css/uicons-solid-chubby.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css"
        />
      </head>
      <body className="w-full h-[100vh] overflow-hidden font-supreme">
        {children}
      </body>
    </html>
  );
}
