import Image from "next/image";
import { memo } from "react";

const CardPreview = ({
  capturedImg,
  selectedPalette,
  onLoaded,
  isLoading,
}: {
  capturedImg: string | null;
  selectedPalette: string | null;
  onLoaded?: () => void;
  isLoading?: boolean;
}) => {
  return (
    <div className="md:min-w-[450px] xl:min-h-[420px] not-only:flex items-center justify-center">
      <div className="relative w-[250px] h-[220px] md:w-full md:h-full rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 w-full h-full rounded-2xl z-20 animate-pulse bg-linear-to-r from-gray-200 via-gray-300 to-gray-200" />
        )}

        {capturedImg && (
          <Image
            src={capturedImg}
            onLoad={onLoaded}
            alt="Captured"
            fill
            className="object-cover scale-x-[-1]"
          />
        )}

        {selectedPalette && (
          <Image
            src={selectedPalette}
            onLoad={onLoaded}
            alt="Palette"
            fill
            className="object-cover pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};

export default memo(CardPreview);
