
import cloudinary from "cloudinary";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function AlbumsPage(){

const folders =await cloudinary.v2.api.root_folders()
console.log(folders)
  return (
    <section>;
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
      </div>
    </section>
  );
}