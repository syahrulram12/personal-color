import Undertone from "@/components/SelectTone/SelectToneComponent";

const paletteImages = [
  "/undertone-3/face-bg-000000.png",
  "/undertone-3/face-bg-56372D.png",
];

const Page = () => {
  return (
    <Undertone
      tone="UNDERTONE"
      mode="undertone"
      paletteImages={paletteImages}
      urlBack="/undertone-2"
      urlNext="/result"
      judulTone="Check your undertone 3/3"
      description="Pilih warna yang membuat kulit Anda lebih cerah dan melembutkan warna di sekitar kantung mata & garis senyum Anda"
    />
  );
};

export default Page;
