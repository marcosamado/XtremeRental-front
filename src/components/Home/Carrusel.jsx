import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Card from './Card';
import { useLoaderData } from 'react-router-dom';

const cards = [
    {
        precio: 55000,
        id: 1,
        title: 'Campera Avant 3 Gore-Tex® 3c Ski Negro',
        Url: 'https://www.ansilta.com/img/articulos/campera_avant_iii_2_imagen3.jpg',
        tipo: 'campera-nieve',
    },
    {
        precio: 30000,
        id: 2,
        title: 'Campera Avant 3 Gore-Tex® 3c Ski Gris',
        Url: 'https://www.ansilta.com/img/articulos/campera_avant_iii_imagen2.jpg',
        tipo: 'campera-nieve',
    },
    {
        precio: 55000,
        id: 3,
        title: 'Campera Avant 3 Gore-Tex® 3c Ski Rosa',
        Url: 'https://www.ansilta.com/img/articulos/anorak_avant_iii_4_imagen1.jpg',
        tipo: 'campera-nieve',
    },
    {
        precio: 45000,
        id: 4,
        title: 'Pantalón Slalom 3 Gore-Tex® 2c Ski',
        Url: 'https://www.ansilta.com/img/articulos/2022/09/pantalon_slalom_3_gore_tex_2c_ski_imagen9.jpg',
        tipo: 'pantalon-nieve',
    },
    {
        precio: 84500,
        id: 5,
        title: 'Pantalón Avant 4 Gore-Tex Pro Ski',
        Url: 'https://www.ansilta.com/img/articulos/2022/10/pantalon_avant_4_gore_tex_pro_ski_imagen6.jpg',
        tipo: 'pantalon-nieve',
    },
    {
        precio: 55000,
        id: 6,
        title: 'Pantalón Slalom 3 Gore-Tex 2c Ski',
        Url: 'https://www.ansilta.com/img/articulos/pantalon_slalom_3_1_imagen1.jpg',
        tipo: 'pantalon-nieve',
    },
    {
        precio: 3000,
        id: 7,
        title: 'Cubre Mitón Mercedario',
        Url: 'https://www.ansilta.com/img/articulos/cubre_miton_mercedario_2_imagen1.jpg',
        tipo: 'guantes-nieve',
    },
    {
        precio: 55000,
        id: 8,
        title: 'Guantes Orion Windstopper® Soft Shell',
        Url: 'https://www.ansilta.com/img/articulos/guantes_orion_9_imagen4.jpg',
        tipo: 'guantes-nieve',
    },
    {
        precio: 14500,
        id: 9,
        title: 'Gafas Ansilta By Qualia - Aconcagua',
        Url: 'https://www.ansilta.com/img/articulos/2023/08/gafas_ansilta_by_qualia_aconcagua_imagen1.jpg',
        tipo: 'lentes-nieve',
    },
    {
        precio: 18450,
        id: 10,
        title: 'Gafas Ansilta By Qualia - Lanín',
        Url: 'https://www.ansilta.com/img/articulos/2023/08/gafas_ansilta_by_qualia_lanin_imagen1.jpg',
        tipo: 'lentes-nieve',
    },
];

function randomCards(array) {
    const randomCards = [...array];
    for (let i = randomCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomCards[i], randomCards[j]] = [randomCards[j], randomCards[i]];
    }
    return randomCards;
}

const randomArray = randomCards(cards).slice(0, 10);

const Carrusel = () => {
    const { data } = useLoaderData();

    console.log(data);

    return (
        <Swiper
            className="relative"
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
        >
            {randomArray.map((item) => (
                <SwiperSlide key={item.id}>
                    <Card {...item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carrusel;
