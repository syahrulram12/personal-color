import Cushion from "./Cushion";
import ColorPalette from "./ColorPalette";
import HeaderLeft from "./HeaderLeft";
import ProductLip from "../ProductLip";
import ClosestPartner from "./ClosestPartner";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ResultComponent = ({ trx }: { trx: string }) => {
  return (
    <div className="bg-result min-h-screen grid md:grid-cols-2 p-3">
      {/* kiri */}
      {/* <h1>ini halaman untuk {trx}</h1> */}
      <div className="flex flex-col items-center">
        <div className="w-[50vw]">
          <HeaderLeft />
        </div>

        <div className="pt-[30vh] md:w-[35vw] mb-3">
          <ColorPalette />
        </div>

        <div className="md:w-[35vw] mb-4">
          <div className="w-full md:pt-0 md:z-50 flex flex-col items-center">
            <Cushion />
          </div>
        </div>
      </div>

      {/* kanan */}
      <div className="flex flex-col gap-6 items-center">
        <ProductLip />
        <ProductLip />
        <ProductLip />
      </div>

      <div>
        <ClosestPartner />
      </div>
    </div>
  );
};

export default ResultComponent;
