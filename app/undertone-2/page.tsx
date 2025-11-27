import Undertone from "@/components/SelectTone/SelectToneComponent";
import { getTone } from "@/lib/selectTone/getTone";

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
      judulTone="Check undertone kamu 2/3"
      description="pilih warna yang membuat kulit anda tampak cerah terutama pada bagian bawah mata dan area bibir / smile line"
    />
  );
};

export default Page;
