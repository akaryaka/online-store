import Button from "@/shared/ui/button/Button";
import React from "react";
import ReactDOM from "react-dom";

declare global {
  interface Window {
    ymaps3: any;
  }
}

const ymaps3Reactify = await ymaps3.import("@yandex/ymaps3-reactify");
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
  reactify.module(ymaps3);

const buttons = [
  {
    id: 1,
    text: "п.Щельяюр",
    type: "text-btn",
    size: "s",
    accent: "secondary",
    btnClass: "text-[#fff] text-[12px] leading-[150%] p-[8px_16px]",
  },
  {
    id: 2,
    text: "д.Вертеп",
    type: "text-btn",
    size: "s",
    accent: "greyscale",
    decoration: "transparent",
    btnClass: "text-[#606060] text-[12px] leading-[150%] p-[8px_16px]",
  },
  {
    id: 3,
    text: "с.Краснобор",
    type: "text-btn",
    size: "s",
    accent: "greyscale",
    decoration: "transparent",
    btnClass: "text-[#606060] text-[12px] leading-[150%] p-[8px_16px]",
  },
  {
    id: 4,
    text: "д.Диюр",
    type: "text-btn",
    size: "s",
    accent: "greyscale",
    decoration: "transparent",
    btnClass: "text-[#606060] text-[12px] leading-[150%] p-[8px_16px]",
  },
];

const HomeOurStores = () => {
  return (
    <>
      <div className="mb-[120px]">
        <h2 className="text-[36px] font-bold mb-[40px]">Наши магазины</h2>
        <div className="flex gap-[24px] mb-[24px]">
          {buttons.map((button) => {
            return (
              <Button
                type={button.type}
                size={button.size}
                accent={button.accent}
                decoration={button.decoration}
                className={button.btnClass}
              >
                {button.text}
              </Button>
            );
          })}
        </div>
        <div className="h-[354px] w-[100%] ">
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
