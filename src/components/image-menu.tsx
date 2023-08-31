import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "./icons/menu";
// import { AddToAlbumDialog } from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";
import { FolderPlus, Pencil } from "lucide-react";
import { AddToAlbumDialog } from "./add-to-album-dialog";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2 bg-gray-600 rounded-[10px]">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          {/* <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />  */}

          <DropdownMenuItem asChild>
            {/* <Button
              className="cursor-pointer flex justify-start pl-4"
              asChild
              variant="ghost"
            > 
               <Link
                href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
              > */}
            {/* <Pencil className="mr-2 w-4 h-4" /> */}
            {/* <span>Add to Album</span>  */}
            <AddToAlbumDialog image={image} />
            {/* </Link> 
             </Button> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
