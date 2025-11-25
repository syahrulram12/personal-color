import Undertone from "@/components/SelectTone/SelectToneComponent";
import { getTone } from "@/lib/selectTone/getTone";

export const dynamic = "force-dynamic";

const Page = async () => {
  const endpoint = "undertone2";
  const depthLevel = await getTone({ endpoint });

  const paletteImages = depthLevel.map((item) => item.image);
  return (
    <Undertone
      pageIndex={1}
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
