import PalettePage from "@/components/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

const paletteImages = [
  "/undertone-1/face-bg-081f5c.png",
  "/undertone-1/face-bg-ed652b.png",
];

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex justify-center items-center pt-16 pb-10 px-4">
      <ButtonBack href="/palette" label="BACK" />
      <ButtonNext href="/undertone-2" label="NEXT" />

    {/* <h1>test</h1> */}
      <div className="w-[80vw]">
        <PalettePage
          paletteImages={paletteImages}
          nextTone="/undertone-2"
          tone="UNDER TONE"
          description="Pilih warna yang membuat kulit Anda lebih cerah dan melembutkan warna di sekitar kantung mata & garis senyum Anda"
          judulTone="Check your undertone 1/3"
          mode="undertone"
        />
      </div>
    </div>
  );
};

export default Page;
