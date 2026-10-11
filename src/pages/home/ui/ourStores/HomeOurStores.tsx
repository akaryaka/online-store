import Button from "@/shared/ui/button/Button";
import { buttons } from "./models/buttons";
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker,
} from "./models/map";

const HomeOurStores = () => {
  return (
    <>
      <div className="mb-[120px]">
        <h2 className="text-[36px] font-bold mb-[40px]">Наши магазины</h2>
        <div className="flex gap-[24px] mb-[24px]">
          {buttons.map((button) => {
            return (
              <Button
                key={button.id}
                type={button.type}
                size={button.size}
                accent={button.accent}
                className={`${button.btnClass} `}
              >
                {button.text}
              </Button>
            );
          })}
        </div>
        <div className="h-[354px] w-[100%]">
          <YMap
            location={{ center: [37.588144, 55.733842], zoom: 9 }}
            mode="vector"
          >
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
            <YMapMarker coordinates={[37.588144, 55.733842]} draggable={true}>
              <section>
                <h1>You can drag this header</h1>
              </section>
            </YMapMarker>
          </YMap>
        </div>
      </div>
    </>
  );
};

export default HomeOurStores;
