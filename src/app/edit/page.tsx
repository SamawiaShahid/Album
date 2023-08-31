"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fil" | "blur" | "grayscale" | "pixelate"
  >();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            onClick={() => setTransformation(undefined)}
            className="bg-black text-white"
          >
            Clear All
          </Button>
          <Button
            onClick={() => setTransformation("generative-fil")}
            className="bg-white text-black hover:bg-white"
          >
            Apply Generative Fill
          </Button>
          <Button
            onClick={() => setTransformation("blur")}
            className="bg-white text-black hover:bg-white"
          >
            Apply Blur
          </Button>
          <Button
            onClick={() => setTransformation("grayscale")}
            className="bg-white text-black hover:bg-white"
          >
            Convert to Gray
          </Button>
          <Button
            onClick={() => setTransformation("pixelate")}
            className="bg-white text-black hover:bg-white"
          >
            Pixelate
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CldImage src={publicId} height="200" width="300" alt="image" />

          {transformation === "generative-fil" && (
            <CldImage
              src={publicId}
              height="1400"
              width="1200"
              alt="image"
              crop="pad"
              fillBackground
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              height="1400"
              width="1200"
              alt="image"
              blur="800"
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              height="1400"
              width="1200"
              alt="image"
              grayscale
              fillBackground
            />
          )}
           {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              height="1400"
              width="1200"
              alt="image"
              pixelate
              fillBackground
            />
          )}
        </div>
      </div>
    </section>
  );
}
