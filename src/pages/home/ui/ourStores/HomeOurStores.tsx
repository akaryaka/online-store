import Button from "@/shared/ui/button/Button";
import { buttons } from "./models/buttons";
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker,
} from "./models/map";
import Title from "@/shared/ui/title";
import { useState } from "react";

const HomeOurStores = () => {
  const [idActive, setIdActive] = useState(0);
  return (
    <>
      <div className="mb-[120px]">
        <Title
          size="m"
          className="mb-[40px] max-[1300px]:mb-[32px] max-[991px]:grid-cols-2 max-[991px]:gap-[40px]"
        >
          Наши магазины
        </Title>
        <div className="flex gap-[24px] mb-[24px] max-[767px]:flex-wrap">
          {buttons.map((button) => {
            return (
              <Button
                key={button.id}
                clickEvent={(event) => {
                  event.target.classList.add("click");
                  alert(event.target.className);
                }}
                type={button.type as "text-btn" | "icon-btn"}
                size={button.size as "s" | "l" | "m"}
                accent={
                  button.id != 1
                    ? (button.accent as
                        | "greyscale"
                        | "secondary"
                        | "primary"
                        | "primaryDisabled"
                        | "error"
                        | "default"
                        | "secondaryDisabled")
                    : "secondary"
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
