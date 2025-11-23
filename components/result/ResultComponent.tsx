import CarouselLips from "../CarouselLips";
import Cushion from "./center/Cushion";
import Lips from "./center/Lips";
import ClosestPartner from "./left/ClosestPartner";
import ColorPalette from "./left/ColorPalette";
import HeaderLeft from "./left/HeaderLeft";

const ResultComponent = () => {
  return (
    <div className="bg-main min-h-screen grid md:grid-cols-3 p-3">
      {/* kiri */}
      <div className="flex flex-col">
        <div>
          <HeaderLeft />
        </div>

        <div className="pt-[30vh] md:w-[35vw] mb-3">
          <ColorPalette />
        </div>

        <div className="md:w-[35vw] mb-4">
          <ClosestPartner />
        </div>
      </div>

      {/* tengah */}
      <div className="w-full md:pt-0 md:z-50 flex flex-col items-center">
        <Cushion />

        {/* <Lips /> */}

        <div className="mt-10 p-3 bg-white rounded-lg flex flex-col items-center justify-center">
          
          <div className="p-3 border-blue-900 font-bold text-berl border rounded-lg">
             Nama Produk
          </div>

          <CarouselLips />
        </div>
      </div>
    </div>
  );
};

export default ResultComponent;
