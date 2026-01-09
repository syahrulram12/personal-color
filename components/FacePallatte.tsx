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
          <div className="basis-2/5 sm:basis-1/2">
            <h1 className="font-baloo font-bold text-md text-base sm:text-2xl xl:text-3xl text-[#4a2e1f] sm:mb-3">
              {title || "One Palette, Every Mood"}
            </h1>

            <p className="text-left sm:text-justify text-[#7D4754] text-xs sm:text-sm font-semibold">
              Apa pun undertone kulitmu, Berl Beaute Fella Face Palette siap
              digunakan untuk berbagai gaya makeup. Sesuaikan dengan mood dan
              look yang kamu inginkan hari ini.
            </p>
          </div>
          <div className="basis-3/5 sm:basis-1/2 flex justify-center xl:justify-end mt-4 sm:mt-0 xl:p-1">
            <Image
              src={image || ""}
              width={400}
              height={400}
              alt="Face Palatte"
              className="object-cover lg:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FacePallatte;
