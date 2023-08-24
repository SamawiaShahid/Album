import cloudinary from "cloudinary";
import { CloudinaryImage } from "@/cloudinary-image";
import { ForceRefresh } from "@/components/force-refresh";
// import GalleryGrid from "./gallery-grid";
// import { SearchForm } from "./search-form";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              height={300}
              width={400}
              imageData={result}
              alt="description"
            />
          ))}
        </div>

        {/* <SearchForm initialSearch={search} />

        <GalleryGrid images={results.resources} /> */}
      </div>
    </section>
  );
}
