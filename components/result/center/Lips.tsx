import ProductLip from "@/components/ui/ProductLip";

import LipMatte1 from "@/public/produk/LM/01 Nude Brown.png";
import LipMatte2 from "@/public/produk/LM/02 Nude Pink.png";
import LipMatte3 from "@/public/produk/LM/03 Soft Pink.png";
import LipMatte4 from "@/public/produk/LM/04 Red Chill.png";
import LipMatte5 from "@/public/produk/LM/05 Nude Purple.png";
import LipMatte6 from "@/public/produk/LM/06 Mochacinno.png";

const LipImages = [
  { src: LipMatte1 },
  { src: LipMatte2 },
  { src: LipMatte3 },
  { src: LipMatte4 },
  { src: LipMatte5 },
  { src: LipMatte6 },
];

const Lips = () => {
  return (
    <div className="mt-10 ">
      <div className="flex flex-col gap-2">
        <ProductLip LipImages={LipImages} />
      </div>
    </div>
  );
};

export default Lips;
