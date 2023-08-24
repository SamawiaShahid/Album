"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { useState, useTransition } from "react";
import { FullHeart } from "@/components/icons/full-heart";
import { SearchResult } from "@/app/gallery/page";
import { Heart } from "lucide-react";
import { setAsFavoriteAction } from "./app/gallery/action";
import path from "path";
// import { ImageMenu } from "./image-menu";

export function CloudinaryImage(
  props:any & {
    imageData: SearchResult;
    path:string
    onUnheart?: (unheartedResource: SearchResult) 
    => void;
  } & Omit<CldImageProps, "src">
  
) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnheart } = props;

  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            onClick={() => {
              onUnheart?.(imageData);
              setIsFavorited(false);
              startTransition(() => {
                setAsFavoriteAction(imageData.public_id, false,props.path);
              });
            }}
            className="absolute top-2 right-2 hover:text-red-500  cursor-pointer"
          />

        </svg>
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true,props.path);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-500  cursor-pointer"
        />
      )}
      {/* <ImageMenu image={imageData} /> */}
    </div>
  );
}
