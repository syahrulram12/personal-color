import Cushion from "./Cushion";
import ColorPalette from "./ColorPalette";
import HeaderLeft from "./HeaderLeft";
import ProductLip from "../ProductLip";
import HeaderRight from "./headerRight";
import { Button } from "../ui/button";
import Link from "next/link";
import EyeBrow from "../EyeBrow";

const reorderProducts = (
  products: Array<{ product: string; image: string }>
) => {
  const order = ["FFC", "Cushion", "TWC"];

  return products.sort((a, b) => {
    const aIndex = order.findIndex((type) => a.product.includes(type));
    const bIndex = order.findIndex((type) => b.product.includes(type));

    // If product type not found in order, put it at the end
    const aPos = aIndex === -1 ? order.length : aIndex;
    const bPos = bIndex === -1 ? order.length : bIndex;

    return aPos - bPos;
  });
};



const ResultComponent = async ({ trx }: { trx: string }) => {
  // const res = await fetch(
  //   `https://market.berlstore.com/api/personalcolor/resulttrx?trx=${trx}`,
  //   { cache: "no-store" }
  // );

  const res = await fetch(
    `http://localhost:9092/api/personalcolor/resulttrx?trx=${trx}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const dataUndertone = data.undertone;

  data.depth_level = reorderProducts(data.depth_level);
  // console.log("hasil data:", data);
  // console.log("data undertone :", dataUndertone);

  const lipData = dataUndertone;

  const undertone = lipData?.["Lip Mate"]?.[0]?.undertone_result_id ?? null;

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

  const eyeBrowList =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lipData?.["Eye Brow"]?.map((item: any) => ({
      src: item.imagevarian,
    })) ?? [];


    console.log(eyeBrowList)
  // console.log("DATA RESULT SERVER:", data);

  return (
    <div className="bg-result min-h-screen p-4">
      <div className="grid grid-cols-1 gap-6 w-full md:max-w-[50vw] shadow-sm overflow-hidden mx-auto p-3">
        <div className="flex flex-col items-center ">
          <HeaderLeft />
        </div>
        <div className="flex flex-col items-center">
          <HeaderRight undertone={undertone} />
        </div>
        {/* kiri */}
        <div className="flex flex-col items-center w-full gap-3">
          <div className="pt-5 w-full mb-3">
            <ColorPalette colors={data?.color_pallete ?? []} />
          </div>

          <div className="md:w-[35vw] mb-4">
            <div className="w-full md:pt-0 md:z-50 flex flex-col items-start md:items-center">
              <Cushion CushionImage={data.depth_level} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <EyeBrow
            title="EYE BROW"
            products={eyeBrowList}
            layout={eyeBrowList.length}
          />
        </div>

        {/* kanan */}
        <div className="flex flex-col gap-3">
          <ProductLip
            title="B ERL LIP MATTE"
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
        <div className=" mt-5 flex flex-col gap-3 items-center justify-center py-5">
          <Link href="/" className="w-full ">
            <Button className="berl-btn w-full max-w-36 mx-auto">Finish</Button>
          </Link>
          {/* <Link href="https://ecommerce.berlstore.com/maps" target="_blank">
          <Button className="cursor-pointer h-auto flex flex-col bg-[#4A2E1F] text-white font-bold text-lg rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
            Mitra Terdekat
          </Button>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ResultComponent;
