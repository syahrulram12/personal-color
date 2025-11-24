import SelectTone from "@/components/SelectTone/SelectToneComponent";
import { getTone } from "@/lib/selectTone/getTone";

export const dynamic = "force-dynamic";

const Page = async () => {
  const endpoint = "depth_level";
  const depthLevel = await getTone({ endpoint });

  const paletteImages = depthLevel.map((item) => item.image);

  return (
    <SelectTone
      tone="SKIN TONE"
      mode="skintone"
      paletteImages={paletteImages}
      urlBack="/hint"
      urlNext="/undertone-1"
      judulTone="Check your undertone 1/3"
      description="Mohon identifikasikan dengan pencahayaan yang terang"
    />
  );
};

export default Page;
