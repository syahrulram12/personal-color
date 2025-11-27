import SelectTone from "@/components/SelectTone/SelectToneComponent";
import { getTone } from "@/lib/selectTone/getTone";

const Page = async () => {
  const endpoint = "depth_level";
  const depthLevel = await getTone({ endpoint });

  const paletteImages = depthLevel.map((item) => item.image);

  return (
    <SelectTone
      pageIndex={10}
      tone="SKIN TONE"
      mode="skintone"
      paletteImages={paletteImages}
      urlBack="/hint"
      urlNext="/undertone-1"
      judulTone="Check undertone kamu 1/3"
      description="mohon identifikasi warna yang paling mendekati dengan kulit anda."
    />
  );
};

export default Page;
