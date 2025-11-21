import ProductLip from "@/components/ui/ProductLip"

import LipMatte1 from "@/public/produk/Lip Matte/Lip-Matte-01.jpg"
import LipMatte2 from "@/public/produk/Lip Matte/Lip-Matte-02.jpg"
import LipMatte3 from "@/public/produk/Lip Matte/Lip-Matte-03.jpg"

const LipImages = [
    { src: LipMatte1, name: "B ERL LIP MATTE 01" },
    { src: LipMatte2, name: "B ERL LIP MATTE 02" },
    { src: LipMatte3, name: "B ERL LIP MATTE 03" },
    { src: LipMatte3, name: "B ERL LIP MATTE 03" },
    { src: LipMatte2, name: "B ERL LIP MATTE 02" },
    { src: LipMatte1, name: "B ERL LIP MATTE 01" },
]

const Lips = () => {
    return (
        <div className="mt-10 ">
            <div className="flex flex-col gap-2">
                <ProductLip LipImages={LipImages} />
                <ProductLip LipImages={LipImages} />
            </div>
        </div>
    )
}

export default Lips