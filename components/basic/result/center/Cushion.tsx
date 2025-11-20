'use client'

import Image from "next/image"
import Beige from "@/public/produk/FOTO PNG CUSHION/BEIGE 1.png"
import Ivory from "@/public/produk/FOTO PNG CUSHION/IVORY 1.png"
import Vanilla from "@/public/produk/FOTO PNG CUSHION/vanilla 1.png"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CushionImage = [
    { src: Beige, name: "B ERL HEALTHY GLAZE CUSHION BEIGE" },
    { src: Ivory, name: "B ERL HEALTHY GLAZE CUSHION IVORY" },
    { src: Vanilla, name: "B ERL HEALTHY GLAZE CUSHION VANILLA" },
]

const Cushion = () => {
    const [index, setIndex] = useState(0)

    const prev = () => {
        setIndex((prev) => (prev === 0 ? CushionImage.length - 1 : prev - 1))
    }

    const next = () => {
        setIndex((prev) => (prev === CushionImage.length - 1 ? 0 : prev + 1))
    }

    const current = CushionImage[index]

    return (
        <div className="flex flex-col items-center">
            <div className="berl-btn p-4 text-center">
                <h1 className="text-white font-baloo">Colorfit / Complexion</h1>
            </div>

            <div className="flex items-center mt-5">
                <div className="w-[100px] h-[150px] bg-white flex flex-col gap-4 justify-center items-center p-1" style={{ borderRadius: '50px 50px 18px 18px' }}>
                    <div className="rounded-full bg-[#FDBA74] w-20 h-20"></div>
                    <h1 className="text-bold text-berl font-baloo">#FDBA74</h1>
                </div>


                <div className="flex justify-center items-center">
                    <button
                        onClick={prev}
                        className="bg-white cursor-pointer shadow-md w-10 h-10 rounded-full flex items-center justify-center mx-4 hover:scale-105 transition"
                    >
                        <ChevronLeft className="text-rose-300" />
                    </button>
                    <div className="relative w-[200px] flex flex-col items-center border-10 border-[#FDBA74] shadow-2xl" style={{ borderRadius: "0px 50px 10px 10px" }}>
                        <div
                            className="absolute bottom-0 bg-[#FDBA74] w-full h-32"
                            // style={{ borderRadius: "0px 50px 0px 0px" }}
                        />
                        <div className="relative z-10 flex justify-center">
                            <Image src={current.src} alt={current.name} width={150} height={150} />
                        </div>
                        <p className="absolute bottom-3 text-center text-berl font-bold z-10">
                            {current.name}
                        </p>
                    </div>
                    <button
                        onClick={next}
                        className="bg-white cursor-pointer shadow-md w-10 h-10 rounded-full flex items-center justify-center mx-4 hover:scale-105 transition"
                    >
                        <ChevronRight className="text-rose-300" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cushion
