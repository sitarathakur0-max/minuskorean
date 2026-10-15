import heroImg from '../assets/images/hero_korean_spread_1791734900310.jpg';
import chickenImg from '../assets/images/korean_fried_chicken_1791734911285.jpg';
import ramenImg from '../assets/images/kimchi_chashu_ramen_1791734923924.jpg';
import dumplingsImg from '../assets/images/handmade_dumplings_1791734934801.jpg';
import drinksImg from '../assets/images/iced_boba_matcha_taro_1791734944856.jpg';

export interface BusinessInfo {
  name: string;
  tagline: string;
  type: string;
  address: string;
  stopDetails: string;
  landmark: string;
  area: string;
  city: string;
  postalCode: string;
  country: string;
  phoneRaw: string;
  phoneDisplay: string;
  whatsappNumber: string;
  mapsCode: string;
  mapsUrl: string;
  closingStatus: string;
  diningOptions: string[];
  onlinePlatform: string;
  priceRange: string;
  conceptNote: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "MinSu",
  tagline: "Sahiwal's First Korean Restaurant",
  type: "Korean Restaurant",
  address: "Stop No. 9, beside Bank Al Habib, Main Market Farid Town, Sahiwal, 57000, Pakistan",
  stopDetails: "Stop No. 9",
  landmark: "Beside Bank Al Habib, Main Market",
  area: "Farid Town",
  city: "Sahiwal",
  postalCode: "57000",
  country: "Pakistan",
  phoneRaw: "+923176064957",
  phoneDisplay: "+92 317 6064957",
  whatsappNumber: "923176064957",
  mapsCode: "M3GJ+8R, Sahiwal, Pakistan",
  mapsUrl: "https://maps.google.com/?q=M3GJ%2B8R,+Sahiwal,+Pakistan",
  closingStatus: "Listed closing time is 1:30 AM. Visitors are advised to confirm current daily opening hours before visiting.",
  diningOptions: ["Dine-in", "Takeout", "Delivery"],
  onlinePlatform: "Foodpanda.pk",
  priceRange: "PKR 1,000–3,000 per person",
  conceptNote: "MinSu presents itself as Sahiwal's first Korean restaurant, bringing Korean-inspired dining culture to Farid Town.",
};

export interface MenuItem {
  id: string;
  name: string;
  category: 'chicken' | 'ramen' | 'dumplings' | 'meals-wraps' | 'drinks';
  categoryLabel: string;
  description: string;
  image: string;
  availabilityNote: string;
  isConfirmedHighlight: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  // Korean Fried Chicken
  {
    id: 'kfc-classic',
    name: 'Korean Fried Chicken',
    category: 'chicken',
    categoryLabel: 'Korean Fried Chicken',
    description: 'Crispy Korean-style fried chicken prepared with savory seasoning and signature glaze.',
    image: chickenImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  {
    id: 'dynamite-chicken',
    name: 'Dynamite Chicken',
    category: 'chicken',
    categoryLabel: 'Korean Fried Chicken',
    description: 'Crispy fried chicken tossed in zesty dynamite sauce.',
    image: chickenImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  // Ramen
  {
    id: 'kimchi-ramen',
    name: 'Kimchi Ramen',
    category: 'ramen',
    categoryLabel: 'Ramen',
    description: 'Comforting noodle soup featuring tangy fermented kimchi and rich broth.',
    image: ramenImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  {
    id: 'chashu-chicken-ramen',
    name: 'Chashu Chicken Ramen',
    category: 'ramen',
    categoryLabel: 'Ramen',
    description: 'Ramen noodles served in warming broth with savory sliced chashu chicken and garnishes.',
    image: ramenImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  // Dumplings
  {
    id: 'handmade-dumplings',
    name: 'Handmade Dumplings',
    category: 'dumplings',
    categoryLabel: 'Dumplings',
    description: 'Delicate handmade dumplings steamed to tender perfection.',
    image: dumplingsImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  {
    id: 'gyoza',
    name: 'Gyoza',
    category: 'dumplings',
    categoryLabel: 'Dumplings',
    description: 'Pan-seared gyoza with golden crisp bottoms and savory filling.',
    image: dumplingsImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  // Meals & Wraps
  {
    id: 'teriyaki-chicken-bento',
    name: 'Teriyaki Chicken Bento',
    category: 'meals-wraps',
    categoryLabel: 'Meals & Bento',
    description: 'Korean-Japanese inspired bento meal featuring glazed teriyaki chicken.',
    image: chickenImg,
    availabilityNote: 'Menu availability to be confirmed',
    isConfirmedHighlight: false,
  },
  {
    id: 'seoul-sizzler-wrap',
    name: 'Seoul Sizzler Wrap',
    category: 'meals-wraps',
    categoryLabel: 'Wraps & Specialities',
    description: 'Seoul-inspired toasted wrap filled with seasoned chicken and fresh fillings.',
    image: chickenImg,
    availabilityNote: 'Menu availability to be confirmed',
    isConfirmedHighlight: false,
  },
  {
    id: 'chips',
    name: 'Chips',
    category: 'meals-wraps',
    categoryLabel: 'Sides',
    description: 'Crispy fried side chips.',
    image: chickenImg,
    availabilityNote: 'Menu availability to be confirmed',
    isConfirmedHighlight: false,
  },
  // Drinks
  {
    id: 'iced-boba-matcha-milk',
    name: 'Iced Boba Matcha Milk',
    category: 'drinks',
    categoryLabel: 'Boba & Drinks',
    description: 'Layered chilled matcha green tea milk served over chewy tapioca boba pearls.',
    image: drinksImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  {
    id: 'iced-boba-milk',
    name: 'Iced Boba Milk',
    category: 'drinks',
    categoryLabel: 'Boba & Drinks',
    description: 'Classic chilled milk drink served over brown sugar boba pearls.',
    image: drinksImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  {
    id: 'taro-drinks',
    name: 'Taro Drinks',
    category: 'drinks',
    categoryLabel: 'Boba & Drinks',
    description: 'Creamy, sweet purple taro specialty beverage served chilled.',
    image: drinksImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
  {
    id: 'matcha-drinks',
    name: 'Matcha Drinks',
    category: 'drinks',
    categoryLabel: 'Boba & Drinks',
    description: 'Refreshing Japanese-style stone-ground matcha beverages.',
    image: drinksImg,
    availabilityNote: 'Supplied Menu Highlight',
    isConfirmedHighlight: true,
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-hero-spread',
    title: 'The MinSu Dining Table',
    category: 'Dining Experience',
    description: 'A curated spread featuring Korean fried chicken, comforting ramen, dumplings, and boba milk tea.',
    image: heroImg,
  },
  {
    id: 'gal-kfc',
    title: 'Glazed Korean Fried Chicken',
    category: 'Chicken',
    description: 'Double-fried crispy chicken coated in glistening savory-sweet sauce and sesame garnish.',
    image: chickenImg,
  },
  {
    id: 'gal-ramen',
    title: 'Comforting Kimchi & Chashu Ramen',
    category: 'Ramen',
    description: 'Springy ramen noodles immersed in hot broth with sliced chashu chicken and seasoned egg.',
    image: ramenImg,
  },
  {
    id: 'gal-dumplings',
    title: 'Handmade Steamed & Pan-Fried Dumplings',
    category: 'Dumplings',
    description: 'Bamboo steamer mandu and crispy golden gyoza with artisanal soy-chili dipping accompaniments.',
    image: dumplingsImg,
  },
  {
    id: 'gal-drinks',
    title: 'Iced Matcha & Taro Boba Specialties',
    category: 'Drinks',
    description: 'Chilled artisanal drinks with layered green matcha and creamy lavender taro over chewy pearls.',
    image: drinksImg,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Where is MinSu located?",
    answer: "MinSu is located at Stop No. 9, beside Bank Al Habib, Main Market Farid Town, Sahiwal, 57000, Pakistan. Our Google Maps location code is M3GJ+8R, Sahiwal.",
  },
  {
    question: "What is the contact number for MinSu?",
    answer: "You can reach us by phone or WhatsApp at +92 317 6064957 for queries, takeout orders, and menu confirmation.",
  },
  {
    question: "Does MinSu offer dine-in?",
    answer: "Yes, MinSu provides dine-in seating for guests wanting to experience Korean-inspired dining in Farid Town.",
  },
  {
    question: "Is takeout available at MinSu?",
    answer: "Yes, takeout is available. You can call or WhatsApp +92 317 6064957 in advance to place a takeout request.",
  },
  {
    question: "Does MinSu offer delivery?",
    answer: "Yes, delivery is listed among our dining options. MinSu is also affiliated with Foodpanda.pk. You can enquire directly via WhatsApp for delivery availability.",
  },
  {
    question: "What kinds of food are featured at MinSu?",
    answer: "MinSu features Korean fried chicken, comforting ramen bowls, handmade dumplings and gyoza, special bento and wrap options, and specialty iced boba drinks.",
  },
  {
    question: "Does the menu include ramen and dumplings?",
    answer: "Yes. Our highlighted menu includes Kimchi Ramen, Chashu Chicken Ramen, Handmade Dumplings, and pan-fried Gyoza.",
  },
  {
    question: "Are boba drinks available?",
    answer: "Yes, our drink highlights include Iced Boba Matcha Milk, Iced Boba Milk, Taro Drinks, and Matcha Drinks.",
  },
  {
    question: "How can I ask about current menu items and pricing?",
    answer: "Because daily kitchen availability and ingredients may vary, please click our WhatsApp button or call +92 317 6064957. Our team will share the latest confirmed menu.",
  },
  {
    question: "How can I get directions to the restaurant?",
    answer: "You can use the 'Get Directions' link on our website or search for location code 'M3GJ+8R, Sahiwal' in Google Maps. We are located right beside Bank Al Habib at Stop No. 9, Farid Town Main Market.",
  },
  {
    question: "How can I confirm the latest opening hours?",
    answer: "Our listed opening information indicates closing at 1:30 AM. We recommend calling or messaging +92 317 6064957 prior to your visit to confirm exact daily operating hours.",
  },
];

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg = "Assalam-o-Alaikum MinSu! I would like to ask about your current menu and ordering options.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
};

export const getItemWhatsAppLink = (itemName: string) => {
  const msg = `Assalam-o-Alaikum MinSu! I would like to enquire about the current availability of "${itemName}".`;
  return getWhatsAppLink(msg);
};
