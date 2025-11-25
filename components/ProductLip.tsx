import CarouselLips from "./CarouselLips";

const ProductLip = ({
  title,
  products,
}: {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
}) => {
  return (
    <div className="w-[80vw] md:w-[30vw] bg-card-component shadow-lg mt-5 p-3 rounded-lg flex flex-col items-center justify-center">
      <div className="p-3 font-bold text-white berl-btn w-full md:w-[10vw] text-center rounded-lg">
        {title}
      </div>

      <CarouselLips images={products} />
    </div>
  );
};

export default ProductLip;
