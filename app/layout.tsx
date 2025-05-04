import React from "react";
import "../style/styles.css";

export const metadata = {
  title: "BEA Ramirez",
  description:
    "A portfolio consisting of projects, skills, contacts, and resume of the author.",
  openGraph: {
    type: "website",
    locale: "en-US",
    url: "my-portfolio-sable-chi-57.vercel.app",
    title: "BEA Ramirez",
    siteName: "BEA Ramirez Portfolio",
    images: [
      {
        url: "/black.svg",
        width: 1200,
        height: 630,
        alt: "Bea Ramirez Logo",
      },
    ],
  },

  icons: {
    icon: [{ url: "/black_transparent.svg", type: "image/svg+xml" }],
  },
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/black.svg" type="image/svg+xml" />
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
