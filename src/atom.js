import { atom, selector } from "recoil";
import cookie from "./assets/cookie.png";
import cake from "./assets/cake.png";
import scorn from "./assets/scorn.png";
import financier from "./assets/financier.png";

export const contentState = atom({
  key: "homeContent",
  default: [],
});

export const menuState = atom({
  key: "menu",
  default: [
    { name: "쿠키", img: cookie },
    { name: "케이크", img: cake },
    { name: "스콘", img: scorn },
    { name: "휘낭시에", img: financier },
  ],
});

export const menuSelector = selector({
  key: "menuSelector",
  get: ({ get }) => {
    const contents = get(contentState);
    const category = get(categoryState);
    return contents.filter((content) => content.category === category);
  },
});

export const categoryState = atom({
  key: "category",
  default: "쿠키",
});
