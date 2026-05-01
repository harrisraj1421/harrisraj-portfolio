import AdminArtGallery from "@/components/AdminArtGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Manager | Harrisraj Portfolio",
  description: "Manage your digital museum collection.",
};

export default function AdminArtPage() {
  return (
    <main>
      <AdminArtGallery />
    </main>
  );
}
