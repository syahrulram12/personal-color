import Cushion from "./Cushion";
import ColorPalette from "./ColorPalette";
import HeaderLeft from "./HeaderLeft";
import ProductLip from "../ProductLip";
import HeaderRight from "./headerRight";
import { Button } from "../ui/button";
import Link from "next/link";

const ResultComponent = async ({ trx }: { trx: string }) => {
  const res = await fetch(
    `https://market.berlstore.com/api/personalcolor/resulttrx?trx=${trx}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const dataUndertone = data.undertone;

  // console.log("hasil data:", data);
  // console.log("data undertone :", dataUndertone);

  const lipData = dataUndertone;

  const undertone = lipData?.["Lip Mate"]?.[0]?.undertone_result_id ?? null;

  const lipMateList =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lipData?.["Lip Mate"]?.map((item: any) => ({
      src: item.imagevarian,
    })) ?? [];

  console.log(lipMateList.length);

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
    <div className="bg-result min-h-screen p-4">
      <div className=" flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          {/* kiri */}
          <div className="flex flex-col items-center">
            <HeaderLeft />

            <div className="pt-5 md:w-[35vw] mb-3">
              <ColorPalette colors={data?.color_pallete ?? []} />
            </div>

            <div className="md:w-[35vw] mb-4">
              <div className="w-full md:pt-0 md:z-50 flex flex-col items-center">
                <Cushion CushionImage={data.depth_level} />
              </div>
            </div>
          </div>

          {/* kanan */}
          <div className="flex flex-col  items-center">
            <HeaderRight undertone={undertone} />
            <ProductLip
              title="B ERL LIP MATE"
              products={lipMateList}
              layout={lipMateList.length}
            />
            <ProductLip
              title="B ERL LIP VELVET"
              products={lipVelvetList}
              layout={lipVelvetList.length}
            />
            <ProductLip
              title="B ERL LIP STAIN"
              products={lipStainList}
              layout={lipStainList.length}
            />
          </div>
        </div>
      </div>
      <div className=" mt-5 flex gap-3 items-center justify-center py-5">
        <Link href="/">
          <Button className="berl-btn">Finish</Button>
        </Link>
        <Link href="https://ecommerce.berlstore.com/maps" target="_blank">
          <Button className="cursor-pointer h-auto flex flex-col bg-[#4A2E1F] text-white font-bold text-lg rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
            Mitra Terdekat
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultComponent;
