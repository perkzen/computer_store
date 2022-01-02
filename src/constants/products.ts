import { Category, Product } from '../store/models/Product';

export const products: Product[] = [
  {
    brand: 'Nvidia',
    category: Category.COMPONENT,
    code: '1',
    description:
      'The GeForce GTX 1080 Ti Founders Edition is truly unique. Designed and built by NVIDIA. ' +
      'Crafted with premium materials and components, including a die-cast aluminum body and 7-phase dualFET power supply.',
    image:
      'https://images.nvidia.com/pascal/img/gtx1080ti/gallery/gallery-1.jpg',
    name: 'GTX 1080 Ti',
    price: 699.99,
    type: 'Graphics card',
    year: 2021,
    stock: 1,
    favourite: true,
  },
  {
    brand: 'Razer',
    category: Category.EQUIPMENT,
    code: '2',
    description:
      'The Razer BlackWidow V3 Tenkeyless is a compact keyboard with no numeric keypad. It features Razer Green mechanical switches with a lifespan of up to 80 million clicks, Razer Chrome RGB lighting and a robust aluminum construction.',
    image:
      'https://assets3.razerzone.com/iug3iGk4B4YwR8RAHVvpNK359RQ=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh47%2Fh5c%2F9081235111966%2Fblackwidow-te-chroma-v2-gallery-hero.jpg',
    name: 'Blackwidow',
    price: 109.99,
    type: 'Keyboard',
    year: 2021,
    stock: 1,
    favourite: true,
  },
  {
    brand: 'Acer',
    category: Category.MONITOR,
    code: '3',
    description:
      "This is a great gaming monitor. The Acer Predator XB271HU's 144Hz refresh rate, G-SYNC support, and excellent low input lag provide a great gaming experience.",
    image:
      'https://www.lowyat.net/wp-content/uploads/2020/10/predator-xb3-visioncare-01.jpg',
    name: 'Predator X34',
    price: 1099.99,
    type: 'Monitor',
    year: 2021,
    stock: 1,
    favourite: true,
  },
  {
    brand: 'G-SKILL',
    category: Category.COMPONENT,
    code: '4',
    description:
      'Skill holds the second slot on our best RAM for gaming buying guide, and the company has a reputation for making solid, reliable (if sometimes ostentatious) system memory, so you can have great, well-founded confidence in the product.',
    image:
      'https://images10.newegg.com/BizIntell/item/20/232/20-232-769/G.SKILL%20Desktop%20Memory-F4-4000C17D-16GTRS-a6.jpg',
    name: 'Trident Z Royal',
    price: 299.99,
    type: 'RAM',
    year: 2021,
    stock: 1,
    favourite: true,
  },
  {
    brand: 'CORSAIR',
    category: Category.COMPONENT,
    code: '5',
    description:
      'The CORSAIR iCUE H60i RGB PRO XT is an all-in-one liquid CPU cooler built for both low noise operation and improved CPU cooling, with a 120mm radiator, a CORSAIR ML120 PWM fan, and 16 RGB LEDs.',
    image:
      'https://my-test-11.slatic.net/p/cb9094b67cd040607b2f5018c707f121.jpg',
    name: 'iCUE H60i RGB PRO Liquid Cooler',
    price: 189.99,
    type: 'Cooler',
    year: 2021,
    stock: 1,
    favourite: true,
  },
];
