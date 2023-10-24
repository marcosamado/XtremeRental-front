import HeroSlider, { Slide } from "hero-slider";
import { useEffect, useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import Subtitle from "./components/Subtitle";

export default function Carrusel() {
    const { data, loading, error } = useFetchProducts(
        "src/fakeApi/apiProductos.json"
    );

    if (loading) return <p>cargando..</p>;
    if (error) return <p>error...</p>;

    console.log(data);

    return (
        <HeroSlider
            height={"11rem"}
            autoplay
            controller={{
                initialSlide: 3,
                slidingDuration: 100,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide),
            }}
        >
            {data.map((item) => (
                <Slide
                    background={{
                        backgroundImageSrc: item.url,
                    }}
                />
            ))}
        </HeroSlider>
    );
}
