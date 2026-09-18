"use client";

import { useEffect, useState } from "react";

interface VideoPlayerProps {
  src?: string;
  thumbnailTime?: number;
  gradientFrom?: string;
  title: string;
  subtitle: string;
  badge: string;
}

function getDriveFileId(src: string): string | null {
  const fileMatch = src.match(/drive\.google\.com\/file\/d\/([^/?]+)/);
  if (fileMatch) return fileMatch[1];
  if (/drive\.google\.com|drive\.usercontent\.google\.com/.test(src)) {
    const idMatch = src.match(/[?&]id=([^&]+)/);
    return idMatch?.[1] ?? null;
  }
  return null;
}

function captureFrame(video: HTMLVideoElement): string | null {
  if (!video.videoWidth || !video.videoHeight) return null;
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.85);
}

export default function VideoPlayer({
  src = "/intro-video.mp4",
  thumbnailTime = 1,
  gradientFrom = "rgba(232,86,26,0.5)",
  title,
  subtitle,
  badge,
}: VideoPlayerProps) {
  const driveFileId = getDriveFileId(src);
  const drivePreviewSrc = driveFileId
    ? `https://drive.google.com/file/d/${driveFileId}/preview`
    : null;
  const driveThumbnailSrc = driveFileId
    ? `https://lh3.googleusercontent.com/d/${driveFileId}=w1920`
    : null;
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(driveThumbnailSrc);

  useEffect(() => {
    if (driveThumbnailSrc) {
      setThumbnail(driveThumbnailSrc);
      return;
    }

    setThumbnail(null);

    const video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.src = src;

    const onSeeked = () => {
      const frame = captureFrame(video);
      if (frame) setThumbnail(frame);
    };

    const onLoadedData = () => {
      if (video.duration && thumbnailTime >= video.duration) {
        video.currentTime = Math.max(0, video.duration * 0.1);
      } else {
        video.currentTime = thumbnailTime;
      }
    };

    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("seeked", onSeeked);

    return () => {
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("seeked", onSeeked);
      video.src = "";
    };
  }, [src, thumbnailTime, driveThumbnailSrc]);

  return (
    <div className="relative w-full aspect-video bg-[#141414] rounded-2xl overflow-hidden">
      {playing ? (
        drivePreviewSrc ? (
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={drivePreviewSrc}
            title={title}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={src}
            autoPlay
            controls
            playsInline
          />
        )
      ) : (
        <button
          className="absolute inset-0 w-full h-full cursor-pointer group"
          onClick={() => setPlaying(true)}
          aria-label={title}
        >
          {thumbnail && (
            <img
              src={thumbnail}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              aria-hidden
            />
          )}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 group-hover:opacity-90 transition-opacity"
            style={{
              background: thumbnail
                ? `linear-gradient(to bottom right, ${gradientFrom}, rgba(20,20,20,0.72))`
                : `linear-gradient(to bottom right, ${gradientFrom}, rgba(20,20,20,0.78))`,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "10px 0 10px 18px",
                  borderColor: "transparent transparent transparent #E8561A",
                  marginLeft: 3,
                }}
              />
            </div>
            <div className="text-center">
              <div className="text-white font-semibold text-sm">{title}</div>
              <div className="text-white/60 text-xs mt-1">{subtitle}</div>
            </div>
          </div>
          <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {badge}
          </div>
        </button>
      )}
    </div>
  );
}
