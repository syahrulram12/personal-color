"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Heading from "../ui/Heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAllow = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      alert("Browser kamu tidak mendukung akses lokasi.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);
        const { latitude, longitude } = position.coords;
        console.log("Lokasi berhasil:", latitude, longitude);
        localStorage.setItem("user_lat", latitude.toString());
        localStorage.setItem("user_long", longitude.toString());

        window.location.href = "/hint";
      },
      (error) => {
        setLoading(false);
        alert("Gagal mendapatkan lokasi. Pastikan izin lokasi diaktifkan.");
        console.error(error);
      }
    );
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center bg-utama">
      <div>
        <Heading size="md" />
      </div>

      <h1 className="text-[#4A2E1F] font-bold text-4xl md:text-5xl leading-tight mb-4">
        Temukan <br />
        Warna Terbaikmu
      </h1>

      <p className="text-[#4A2E1F]/90 text-base md:text-lg max-w-md font-bold mb-12">
        Kenali personal color yang merefleksikan dirimu dan<br />
        pilih shade yang paling sempurna untukmu!
      </p>

      <div className="flex flex-col gap-6 w-full h-auto max-w-xs">
        <Button className="berl-btn" onClick={() => setOpen(true)}>
          Mulai
        </Button>
      </div>

      {/* Modal Akses Lokasi */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Aktifkan Lokasi
            </DialogTitle>
            <DialogDescription>
              Kami membutuhkan akses lokasi untuk memberikan rekomendasi warna
              yang sesuai.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-center gap-4 mt-6">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Batal
            </Button>

            <Button onClick={handleAllow} disabled={loading}>
              {loading ? "Mengambil lokasi..." : "Izinkan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
