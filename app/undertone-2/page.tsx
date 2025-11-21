import PalettePage from "@/components/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

const paletteImages = [
  "/undertone-2/face-bg-C5C5C1.png",
  "/undertone-2/face-bg-C49308.png",
];

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex justify-center items-center pt-16 pb-10 px-4">
      <ButtonBack href="/undertone-1" label="BACK" />
      <ButtonNext href="/undertone-3" label="NEXT" />

      <div className="w-[80vw]">
        <PalettePage
          paletteImages={paletteImages}
          nextTone="/undertone-3"
          tone="UNDER TONE" 
          description="Pilih warna yang membuat kulit Anda lebih cerah dan melembutkan warna di sekitar kantung mata & garis senyum Anda"
          judulTone="Check your undertone 2/3"
          mode="undertone"
        />
      </div>
    </div>
  );
};

export default Page;
