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
import { Loader2, MapPin } from "lucide-react";

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

      {/* Title */}
      <h1 className="font-baloo text-[#4A2E1F] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 mt-2">
        Temukan <br />
        Warna Terbaikmu
      </h1>

      {/* Description */}
      <p className="font-baloo text-[#4A2E1F]/90 text-sm sm:text-base md:text-lg max-w-sm md:max-w-md font-bold mb-10 leading-relaxed">
        Kenali personal color yang merefleksikan dirimu dan
        <br className="hidden sm:block" />
        pilih shade yang paling sempurna untukmu!
      </p>

      {/* Button container */}
      <div className="flex flex-col gap-4 w-full max-w-[200px]">
        <Button
          className="berl-btn w-full py-3 text-base sm:text-lg"
          onClick={() => setOpen(true)}
        >
          Mulai
        </Button>
      </div>

      {/* Modal Akses Lokasi */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="bg-card-component2 w-[90%] max-w-md rounded-2xl shadow-xl text-center p-6 md:p-8 font-baloo
    "
        >
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6 text-berl" />
              Aktifkan Lokasi
            </DialogTitle>

            <DialogDescription className="text-sm text-start text-black leading-relaxed ">
              Kami membutuhkan akses lokasi untuk memberikan rekomendasi warna
              yang lebih akurat sesuai kondisi pencahayaan di sekitar Anda.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-3 flex flex-col md:flex-row justify-center gap-3">
            <Button
              variant="outline"
              className="w-full md:w-32"
              onClick={() => setOpen(false)}
            >
              Batal
            </Button>

            <Button
              className="w-full md:w-40"
              onClick={handleAllow}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Mengambil lokasi...
                </span>
              ) : (
                "Izinkan"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
