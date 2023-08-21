"use client";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button asChild>
      <div className="flex gap-2">
        <CldUploadButton
          onUpload={(result: UploadResult) => {
            setImageId(result.info.public_id);
          }}
          uploadPreset="jwi2k3dv"
        />
        </div>
      </Button>
      

      {/* <CldImage
        width="560"
        height="400"
        src="zuczxluj3in0m0wh6sub"
        sizes="100vw"
        alt="Description of my image"
      /> */}
    </main>
  );
}
