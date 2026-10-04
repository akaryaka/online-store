import Button from "@/shared/ui/button/Button";
// import ymaps3 from "@yandex/ymaps3-types";
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

const HomeOurStores = () => {
  return (
    <>
      <div className="mb-[120px]">
        <h2 className="text-[36px] font-bold mb-[40px]">Наши магазины</h2>
        <div className="flex gap-[24px] mb-[24px]">
          <Button className="text-[#fff] bg-[#70C05B]">п.Щельяюр</Button>
          <Button className="text-[#606060] bg-[#F3F2F1]">д.Вертеп</Button>
          <Button className="text-[#606060] bg-[#F3F2F1]">с.Краснобор</Button>
          <Button className="text-[#606060] bg-[#F3F2F1]">д.Диюр</Button>
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
