'use client'

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

interface LipImage {
    src: StaticImageData
    name: string
}

const ProductLip = ({ LipImages }: { LipImages: LipImage[] }) => {
    const [index, setIndex] = useState(0)

    const prev = () => {
        setIndex((prev) => (prev === 0 ? LipImages.length - 1 : prev - 1))
    }

    const next = () => {
        setIndex((prev) => (prev === LipImages.length - 1 ? 0 : prev + 1))
    }

    const current = LipImages[index]

    return (
        <div className="flex justify-center items-center gap-4">
            <button
                onClick={prev}
                className="bg-white cursor-pointer shadow-md w-10 h-10 rounded-full flex items-center justify-center mx-4 hover:scale-105 transition"
            >
                <ChevronLeft className="text-rose-300" />
            </button>

            <div className="bg-component w-[10vw] p-4 rounded-lg shadow-lg flex flex-col gap-3">
                <div className="border-[#7D4754] p-2 border-2 rounded-lg flex flex-col items-center gap-2">
                    <h1 className="text-berl font-bold text-center">{current.name}</h1>
                </div>

                <div className="relative w-full h-[20vh] rounded-lg overflow-hidden">
                    <Image
                        src={current.src}
                        alt={current.name}
                        fill
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <button
                onClick={next}
                className="bg-white cursor-pointer shadow-md w-10 h-10 rounded-full flex items-center justify-center mx-4 hover:scale-105 transition"
            >
                <ChevronRight className="text-rose-300" />
            </button>
        </div>
    )
}

export default ProductLip
