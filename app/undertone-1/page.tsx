import Undertone from "@/components/SelectTone/SelectToneComponent";

const paletteImages = [
  "/undertone-1/face-bg-081f5c.png",
  "/undertone-1/face-bg-ed652b.png",
];

const Page = () => {
  return (
    <Undertone
      tone="UNDERTONE"
      mode="undertone"
      paletteImages={paletteImages}
      urlBack="/palette"
      urlNext="/undertone-2"
      judulTone="Check your undertone 1/3"
      description="Pilih warna yang membuat kulit Anda lebih cerah dan melembutkan warna di sekitar kantung mata & garis senyum Anda"
    />
  );
};

export default Page;
