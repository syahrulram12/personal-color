import CarouselEyeBrow from "./CarouselEyeBrow";

const EyeBrow = ({
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
    <>
      <div className="p-3 font-bold text-white berl-btn text-center rounded-lg">
        <h1 className="font-baloo text-md">{title}</h1>
      </div>
      <div className="w-10/12 bg-card-component mt-5 rounded-lg flex flex-col items-center justify-center mx-auto">
        <CarouselEyeBrow images={products} layout={layout} />
      </div>
    </>
  );
};

export default EyeBrow;
