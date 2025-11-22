import Undertone from "@/components/SelectTone/SelectToneComponent";

const paletteImages = [
  "/undertone-2/face-bg-C5C5C1.png",
  "/undertone-2/face-bg-C49308.png",
];

const Page = () => {
  return (
    <Undertone
      tone="UNDERTONE"
      mode="undertone"
      paletteImages={paletteImages}
      urlBack="/undertone-1"
      urlNext="/undertone-3"
      judulTone="Check your undertone 2/3"
      description="Pilih warna yang membuat kulit Anda lebih cerah dan melembutkan warna di sekitar kantung mata & garis senyum Anda"
    />
  );
};

export default Page;
