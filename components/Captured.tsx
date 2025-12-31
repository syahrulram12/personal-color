"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import OutlineFace from "@/public/face-outline.png";
import PreviewComponent from "./Preview";

const Captured = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [mode, setMode] = useState<"camera" | "preview">("camera");
  const [capturedImg, setCapturedImg] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (mode !== "camera") return;

    let stream: MediaStream | null = null;
    const videoEl = videoRef.current;

    navigator.mediaDevices.getUserMedia({ video: true }).then((s) => {
      stream = s;
      if (videoEl) {
        videoEl.srcObject = stream;
      }
    });

    return () => {
      if (stream) {
        stream.getTracks().forEach((t) => t.stop());
        stream.getVideoTracks().forEach((t) => t.stop());
      }
      if (videoEl) videoEl.srcObject = null;
    };
  }, [mode]);

  const startCountdown = () => {
    setCountdown(3);

    let counter = 3;
    const interval = setInterval(() => {
      counter--;
      if (counter === 0) {
        clearInterval(interval);
        setCountdown(null);
        capturePhoto();
      } else {
        setCountdown(counter);
      }
    }, 1000);
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imgData = canvas.toDataURL("image/png");
    setCapturedImg(imgData);

    localStorage.setItem("captured-image", imgData);
    window.dispatchEvent(new Event("captured-image-updated"));

    setMode("preview");
  };

  const resetCamera = () => {
    setMode("camera");
  };

  if (mode === "preview" && capturedImg) {
    return (
      <PreviewComponent
        image={capturedImg}
        onRetake={resetCamera}
        nextHref="/palette"
      />
    );
  }

  return (
    <div className="relative w-[420px] aspect-3/4 rounded-xl overflow-hidden shadow-xl">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-full object-cover scale-x-[-1]"
      />

      {/* FRAME OUTLINE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src={OutlineFace}
          alt="outline"
          width={500}
          height={900}
          className="scale-75"
        />
      </div>

      {countdown && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-6xl font-bold animate-pulse">
            {countdown}
          </span>
        </div>
      )}

      {!countdown && (
        <button
          onClick={startCountdown}
          className="
            absolute bottom-6 left-1/2 -translate-x-1/2
            w-20 h-20 bg-white/10 backdrop-blur-xl
            rounded-full border border-white/30
            flex items-center justify-center
            text-white hover:bg-white/20 transition cursor-pointer
          "
        >
          <Camera size={38} strokeWidth={1.5} />
        </button>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default Captured;
