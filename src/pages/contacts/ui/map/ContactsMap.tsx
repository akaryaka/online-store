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

const ContactsMap = () => {
  return (
    <>
      <div className="map w-[100%] h-[354px] bg-[grey]">
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
    </>
  );
};

export default ContactsMap;
