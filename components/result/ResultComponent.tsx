import Cushion from "./Cushion";
import ColorPalette from "./ColorPalette";
import HeaderLeft from "./HeaderLeft";
import ProductLip from "../ProductLip";
import ClosestPartner from "./ClosestPartner";

const ResultComponent = async ({ trx }: { trx: string }) => {
  const res = await fetch(
    `https://market.berlstore.com/api/personalcolor/resulttrx?trx=${trx}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const dataUndertone = data.undertone;

  console.log("data undertone :", dataUndertone);

  const lipData = dataUndertone; // ini object: Lip Mate, Lip Velvet, dll

  // Convert jadi array gampang
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
    <div className="bg-result min-h-screen grid md:grid-cols-2 p-3">
      {/* kiri */}
      <div className="flex flex-col items-center">
        <div className="w-[50vw]">
          <HeaderLeft />
        </div>

        <div className="pt-[30vh] md:w-[35vw] mb-3">
          <ColorPalette />
        </div>

        <div className="md:w-[35vw] mb-4">
          <div className="w-full md:pt-0 md:z-50 flex flex-col items-center">
            <Cushion CushionImage={data.depth_level} />
          </div>
        </div>
      </div>

      {/* kanan */}
      <div className="flex flex-col gap-6 items-center">
        <ProductLip title="B ERL LIP MATE" products={lipMateList} />

        <ProductLip title="B ERL LIP VELVET" products={lipVelvetList} />

        <ProductLip title="B ERL LIP STAIN" products={lipStainList} />
      </div>

      <div>
        <ClosestPartner />
      </div>
    </div>
  );
};

export default ResultComponent;
