import Undertone from "@/components/SelectTone/SelectToneComponent";
import { getTone } from "@/lib/selectTone/getTone";

const Page = async () => {
  const endpoint = "undertone1";
  const depthLevel = await getTone({ endpoint });

  const paletteImages = depthLevel.map((item) => item.image);

  return (
    <Undertone
      pageIndex={0}
      tone="UNDERTONE"
      mode="undertone"
      paletteImages={paletteImages}
      urlBack="/palette"
      urlNext="/undertone-2"
      judulTone="Check undertone kamu 1/3"
      description="pilih warna yang membuat kulit anda tampak cerah terutama pada bagian bawah mata dan area bibir / smile line"
    />
  );
};

export default Page;
