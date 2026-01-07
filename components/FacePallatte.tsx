import Image from "next/image";

const FacePallatte = ({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) => {
  return (
    <>
      <div className="w-full mx-auto my-4">
        <div className="flex flex-wrap items-center ms-5">
          <div className="lg:basis-1/2">
            <h1 className="font-baloo font-bold text-md text-2xl xl:text-3xl text-[#4a2e1f] mb-3">
              {title || "One Palette, Every Mood"}
            </h1>

            <p className="text-justify text-[#7D4754] text-sm xl:text-base font-semibold">
              Apa pun undertone kulitmu, Berl Beauty Fella Face Palette siap
              digunakan untuk berbagai gaya makeup. Sesuaikan dengan mood dan
              look yang kamu inginkan hari ini.
            </p>
          </div>
          <div className="lg:basis-1/2 flex justify-center xl:justify-end mt-4 sm:mt-0 xl:p-1">
            <Image
              src={image || ""}
              width={400}
              height={400}
              alt="Face Palatte"
              className="object-cover w-6/12  lg:w-11/12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FacePallatte;
