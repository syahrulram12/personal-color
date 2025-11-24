import Undertone from "@/components/SelectTone/SelectToneComponent";
import { getTone } from "@/lib/selectTone/getTone";
export const dynamic = "force-dynamic";

const Page = async () => {
  const endpoint = "undertone1";
  const depthLevel = await getTone({ endpoint });

  const paletteImages = depthLevel.map((item) => item.image);

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
