import PalettePage from "@/components/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

const paletteImages = [
  "/undertone-3/face-bg-000000.png",
  "/undertone-3/face-bg-56372D.png",
];

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex justify-center items-center pt-16 pb-10 px-4">
      <ButtonBack href="/undertone-2" label="BACK" />
      <ButtonNext href="/result" label="NEXT" />

      <div className="w-[80vw]">
        <PalettePage
          paletteImages={paletteImages}
          nextTone="/result"
          tone="UNDER TONE"
          description="Pilih warna yang membuat kulit Anda lebih cerah dan melembutkan warna di sekitar kantung mata & garis senyum Anda"
          judulTone="Check your undertone 3/3"
          mode="undertone"
        />
      </div>
    </div>
  );
};

export default Page;
