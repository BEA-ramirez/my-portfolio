import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Tag from "./Tag";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  alt,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
}) {
  return (
    <div className="flex ml-[4rem] gap-4 border w-[83%]">
      <div className="pt-2">
        <Image src={image} alt={alt} width={130} height={80} />
      </div>
      <div className="w-[27rem]">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-[0.9rem] mb-5 leading-[1.5]">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag title={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
