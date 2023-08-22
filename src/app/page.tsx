

import cloudinary from "cloudinary";
import UploadButton from "./gallery/upload-button";

export type SearchResult = {
  public_id: string;
  tags: string[];
};


export default async function GalleryPage() {
 const results= await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(10)
  .execute()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <section>
      <div className="flex flex-col gap-8">
        <div className="flex ">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />

        </div>
      </div>
    </section>
    </main>
  );
}
