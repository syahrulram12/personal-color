import Cushion from "./Cushion";
import ColorPalette from "./ColorPalette";
import HeaderLeft from "./HeaderLeft";
import ProductLip from "../ProductLip";
import ClosestPartner from "./ClosestPartner";
import HeaderRight from "./headerRight";
import { Button } from "../ui/button";

const ResultComponent = async ({ trx }: { trx: string }) => {
  const res = await fetch(
    `https://market.berlstore.com/api/personalcolor/resulttrx?trx=${trx}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const dataUndertone = data.undertone;

  // console.log("data undertone :", dataUndertone);

  const lipData = dataUndertone;

  const lipMateList =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lipData?.["Lip Mate"]?.map((item: any) => ({
      src: item.imagevarian,
    })) ?? [];

  const lipVelvetList =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lipData?.["LIP VELVET"]?.map((item: any) => ({
      src: item.imagevarian,
    })) ?? [];

  const lipStainList =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lipData?.["Lip Stain"]?.map((item: any) => ({
      src: item.imagevarian,
    })) ?? [];

  // console.log("DATA RESULT SERVER:", data);

  return (
    <div className="bg-result min-h-screen pt-10">
      <div className="grid md:grid-cols-2 pb-2">
        {/* kiri */}
        <div className="flex flex-col items-center">
          <HeaderLeft />

          <div className="pt-5 md:pt-[7vh] md:w-[35vw] mb-3">
            <ColorPalette />
          </div>

          <div className="md:w-[35vw] mb-4">
            <div className="w-full md:pt-0 md:z-50 flex flex-col items-center">
              <Cushion CushionImage={data.depth_level} />
            </div>
          </div>
        </div>

        {/* kanan */}
        <div className="flex flex-col gap-1 items-center">
          <HeaderRight />
          <ProductLip title="B ERL LIP MATE" products={lipMateList} />
          <ProductLip title="B ERL LIP VELVET" products={lipVelvetList} />
          <ProductLip title="B ERL LIP STAIN" products={lipStainList} />
        </div>
      </div>

      <div className="mt-5 flex gap-3 items-center justify-center py-5">
        <Button className="berl-btn">Finish</Button>
        <Button className="berl-btn">Mitra Terdekat</Button>
      </div>
    </div>
  );
};

export default ResultComponent;
