"use server";

// import { getVideoIdFromUrl } from "@/lib/getVideoIdFromUrl";
import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = "abv";

  if (!videoId) return;

  // Redirect to the new post
  redirect(`/video/${videoId}/analysis`);
}
