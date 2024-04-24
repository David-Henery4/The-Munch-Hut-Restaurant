import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("@/components/shared/map-comps/Map"), {
  ssr: false,
});
import getMapCoords from "@/data-calls/getMapCoords";

const FooterMapContainer = async () => {
  const activeCoords = await getMapCoords();
  //
  return (
    <div className="smTab:col-start-2 smTab:col-end-12 lap:col-start-10 lap:col-end-13 lap:row-start-1 lap:row-end-4">
      <DynamicMap activeCoords={activeCoords}/>
    </div>
  );
};

export default FooterMapContainer;
