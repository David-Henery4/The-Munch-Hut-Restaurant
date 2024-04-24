import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("@/components/shared/map-comps/Map"), {
  ssr: false,
});
import getMapCoords from "@/data-calls/getMapCoords";

const MapWrapper = async () => {
  const activeCoords = await getMapCoords()
  //
  return (
    <div className="w-full h-80 smLap:flex-[2] smTab:h-[540px]">
      <DynamicMap activeCoords={activeCoords} />
    </div>
  );
};

export default MapWrapper;
