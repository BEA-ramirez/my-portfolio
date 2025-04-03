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
    <div className="flex ml-7">
      <div className="pt-7">
        <Image
          src={image}
          alt={alt}
          width={150}
          height={80}
          objectFit="cover"
        />
      </div>

      <Card className="w-[30rem]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag title={tag} key={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
