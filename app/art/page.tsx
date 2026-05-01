import ArtGallery from "@/components/ArtGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Gallery | Harrisraj Portfolio",
  description: "A curated digital museum of creative pursuits, illustrations, and concept art.",
};

export default function ArtPage() {
  return (
    <main>
      <ArtGallery />
    </main>
  );
}
