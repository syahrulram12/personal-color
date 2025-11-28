"use client";

import CardHint from "@/components/CardHint";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import HomeHint from "@/public/home-hint.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import Link from "next/link";

const dataCard = [
  { judul: "CEK PENCAHAYAAN" },
  { judul: "PANDANGAN LURUS" },
  { judul: "POSISI WAJAH" },
];

const HintComponent = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleAgree = () => {
    setOpen(false);
    setTimeout(() => {
      router.push("/captured");
    }, 200); // smooth transition
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 px-6 py-5">
        {/* <Heading size="lg" /> */}

        <h1 className="uppercase text-berl font-bold text-1xl md:text-2xl leading-tight">
          Pastikan wajah berada di tengah tampilan kamera dan <br /> diambilkan
          dengan pencahayaan yang terang
        </h1>

        <div className="bg-component rounded-4xl px-16 py-12 shadow-lg">
          <Image src={HomeHint} alt="hint-camera" width={300} height={200} />
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => (window.location.href = "/")}
            className="berl-btn-2 mt-4 w-40"
          >
            Back
          </Button>

          <Button className="berl-btn mt-4 w-40" onClick={() => setOpen(true)}>
            Start
          </Button>
        </div>
      </div>

      {/* MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="
      w-[90%] 
      max-w-md 
      rounded-2xl 
      shadow-2xl 
      bg-card-component2 
      font-baloo 
      p-6 
      md:p-8
      text-berl
    "
        >
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-xl md:text-2xl font-bold text-berl text-center">
              Sebelum Melanjutkan
            </DialogTitle>

            <DialogDescription
              className="
          mt-1 
          text-sm md:text-base 
          leading-relaxed 
          text-berl 
          text-justify
        "
            >
              Untuk memastikan hasil analisis warna yang lebih akurat, kami
              memerlukan:
              <br />
              <br />• Akses <b>kamera</b> untuk mengambil gambar wajah Anda.
              {/* <br />• Akses <b>lokasi</b> untuk menyesuaikan pencahayaan
        berdasarkan area. */}
              <br />
              <br />
              <span className="font-semibold text-lg md:text-xl text-berl">
                Penting untuk diketahui:
              </span>
              <br />
              Foto Anda <b>tidak kami simpan di server atau database</b>. Foto
              tersebut hanya disimpan sementara di perangkat Anda sendiri
              melalui <b>penyimpanan browser</b> (local storage).
              <br />
              Artinya, <b>kami tidak memiliki akses</b> ke foto tersebut.
              <br />
              <br />
              Dengan melanjutkan, Anda menyetujui{" "}
              <Link
                className="text-berl font-bold underline underline-offset-2"
                href="https://berlcosmetics.com/privacy-policy/"
                target="_blank"
              >
                Privacy Policy
              </Link>{" "}
              dan penggunaan data ini secara aman.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-6 flex flex-col md:flex-row justify-center gap-3">
            <Button
              variant="outline"
              className="w-full md:w-32"
              onClick={() => setOpen(false)}
            >
              Batal
            </Button>

            <Button className="w-full md:w-40" onClick={handleAgree}>
              Setujui & Lanjut
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HintComponent;
