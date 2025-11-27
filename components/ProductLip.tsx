import CarouselLips from "./CarouselLips";

const ProductLip = ({
  title,
  products,
  layout,
}: {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
  layout: string;
}) => {
  return (
    <div className="w-[80vw] md:w-[20vw] bg-card-component shadow-lg mt-5 p-3 rounded-lg flex flex-col items-center justify-center">
      <div className="p-3 font-bold text-white berl-btn w-full md:w-[10vw] text-center rounded-lg">
        <h1 className="font-baloo text-md">{title}</h1>
      </div>

      <CarouselLips images={products} layout={layout} />
    </div>
  );
};

export default ProductLip;
