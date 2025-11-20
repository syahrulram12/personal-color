import Map, { Location } from "@/components/Maps/MapBox"

const locations: Location[] = [
    {
        id: 1,
        name: "Mitra A",
        coordinates: [106.827153, -6.175392],
    },
    {
        id: 2,
        name: "Mitra B",
        coordinates: [106.800331, -6.21462],
    },
];

const ClosestPartner = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center gap-2">
                <div className="md:w-1/3">
                    <h1 className="berl-btn text-center p-3">Mitra Terdekat</h1>
                </div>

                <div>
                    <Map locations={locations} />
                </div>
            </div>
        </div>
    )
}

export default ClosestPartner