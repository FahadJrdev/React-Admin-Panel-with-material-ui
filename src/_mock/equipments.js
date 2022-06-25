import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
    'Redo Air Max Zephyr',
    'Jordan Delta',
    'Air Jordan XXXV PF',
    'React Waffle Racer Crater',
    'Kyrie 7 EP Sisterhood',
    'Zenobi Air Zoom BB NXT',
    'Messi Air Force 1 07 LX',
    'Huwai Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    'Samsung Blazer Low 77 Vintage',
    'Nike ZoomX SuperRep Surge',
    'Zoom Freak 2',
    'Apple Air Force 1 NDESTRUKT',
    'Io Space Hippie 04',
    'NikeCourt Royale',
    'Raphsody Air Zoom Pegasus 37 Premium',
    'Tiamph Air Zoom SuperRep',
    'Rumble Royale',
    'Anime React Art3mis',
    'Kdrama React Infinity Run Flyknit A.I.R. Chaz Bear',
    'Ronaldo Air Force 1 Shadow SE',
    'Fedarar Air Zoom Tempo NEXT%',
    'Nadal DBreak-Type',
    'Nike Air Max Up',
    'WCW Air Max 270 React ENG'
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const Equipmentso = [...Array(24)].map((_, index) => {
    const setIndex = index + 1;

    return {
        id: faker.datatype.uuid(),
        cover: `/static/mock-images/equipments/equipments_${setIndex}.jpg`,
        name: PRODUCT_NAME[index],
        colors:
            (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
            (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
            (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
            (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
            (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
            (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
            PRODUCT_COLOR
    };
});

export default Equipmentso;