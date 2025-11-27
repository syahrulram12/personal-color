import CardHint from "@/components/CardHint";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import HomeHint from "@/public/home-hint.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const dataCard = [
  { judul: "CEK PENCAHAYAAN" },
  { judul: "PANDANGAN LURUS" },
  { judul: "POSISI WAJAH" },
];

const Page = () => {
  return (
    <div className="relative min-h-screen bg-main flex items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center gap-6 px-6 py-5">
        <Heading size="lg" />

        <h1 className="text-berl font-bold text-1xl md:text-3xl leading-tight">
          POSISIKAN WAJAH TEPAT DI TENGAH
          <br /> POSISI KAMERA
        </h1>

        <div className="grid md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-center items-center text-center pt-4 gap-4 flex-wrap text-white font-bold">
            {dataCard.map((item, index) => (
              <CardHint key={index} judul={item.judul} />
            ))}
          </div>
          <div className="bg-component rounded-4xl p-16">
            <Image src={HomeHint} alt="hint-camera" width={300} height={200} />
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/">
            <Button className="berl-btn-2 mt-4 w-40">Back</Button>
          </Link>

          <Link href="/captured">
            <Button className="berl-btn mt-4 w-40">Start</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
