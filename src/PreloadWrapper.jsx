// src/PreloadWrapper.jsx
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

const assetsToLoad = [
  "/vids/agri.mp4",
  "/vids/dev.mp4",
  "/imgs/krishna_img.png",
  "/imgs/behind_koyya.jpg",
  "/imgs/2149241221.jpg",
  "/imgs/2149313746.jpg",
  "/imgs/aboutheader.png",
  "/imgs/empolyees.jpg",
  "/imgs/workplace.jpg",
];

export default function PreloadWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      const loadImage = (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });

      const loadVideo = (src) =>
        new Promise((resolve) => {
          const video = document.createElement("video");
          video.src = src;
          video.onloadeddata = resolve;
          video.onerror = resolve;
        });

      await Promise.all(
        assetsToLoad.map((src) =>
          src.endsWith(".mp4") ? loadVideo(src) : loadImage(src)
        )
      );

      setTimeout(() => setLoading(false), 300); // slight delay for smooth UX
    };

    loadAssets();
  }, []);

  return <>{loading ? <Preloader /> : children}</>;
}
