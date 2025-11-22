import SelectTone from "@/components/SelectTone/SelectToneComponent";

const paletteImages = [
  "/palette/face-bg-F5C9A6.png",
  "/palette/face-bg-e2cdb2.png",
  "/palette/face-bg-dfb48a.png",
];

const Page = () => {
  return (
    <SelectTone
      tone="SKIN TONE"
      mode="skintone"
      paletteImages={paletteImages}
      urlBack="/hint"
      urlNext="/undertone-1"
      judulTone="Check your undertone 1/3"
      description="Please identify with natural bright light"
    />
  );
};

export default Page;
