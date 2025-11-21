import PalettePage from "@/components/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

const paletteImages = [
  "/palette/face-bg-F5C9A6.png",
  "/palette/face-bg-e2cdb2.png",
  "/palette/face-bg-dfb48a.png",
];

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex justify-center items-center pt-16 pb-10 px-4">
      <ButtonBack href="/hint" label="BACK" />
      <ButtonNext href="/undertone-1" label="NEXT" />

      <PalettePage
        paletteImages={paletteImages}
        nextTone="/undertone-1"
        description="Please identify with natural bright light"
        tone="SKIN TONE"
      />
    </div>
  );
};

export default Page;
