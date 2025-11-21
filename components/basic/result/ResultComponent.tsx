import Cushion from "./center/Cushion";
import ClosestPartner from "./left/ClosestPartner";
import ColorPalette from "./left/ColorPalette";
import HeaderLeft from "./left/HeaderLeft";

const ResultComponent = () => {

  return (
    <div className="bg-main flex flex-wrap-reverse justify-between min-h-screen p-3">

      {/* kiri */}
      <div className="flex flex-col">
        <div>
          <HeaderLeft />
        </div>

        {/* spacer */}
        <div className="pt-[42vh] md:pt-[42vh]"></div>

        <div className="md:w-[35vw] mb-3">
          <ColorPalette />
        </div>

        <div className="md:w-[35vw] mb-4">
          <ClosestPartner />
        </div>
      </div>

      {/* tengah */}
      <div className="pt-[30vh] w-full md:pt-0 md:z-50">
        <Cushion/>
      </div>
      
      
      {/* kanan */}
      <div>
        <h1>KANAN</h1>
      </div>

    </div>
  );
};

export default ResultComponent;
