import Button from "@/shared/ui/button/Button";
import { buttons } from "./models/buttons";
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker,
} from "./models/map";
import Title from "@/shared/ui/title";

const HomeOurStores = () => {
  return (
    <>
      <div className="mb-[120px]">
        <Title
          size="m"
          className="mb-[40px] max-[1300px]:mb-[32px] max-[991px]:grid-cols-2 max-[991px]:gap-[40px]"
        >
          Наши магазины
        </Title>
        <div className="flex gap-[24px] mb-[24px]">
          {buttons.map((button) => {
            return (
              <Button
                key={button.id}
                type={button.type as "text-btn" | "icon-btn"}
                size={button.size as "s" | "l" | "m"}
                accent={
                  button.accent as
                    | "secondary"
                    | "greyscale"
                    | "primary"
                    | "primaryDisabled"
                    | "error"
                    | "default"
                    | "secondaryDisabled"
                }
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
