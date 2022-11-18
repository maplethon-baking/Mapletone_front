import { atom } from "recoil";
import cookie from "./assets/cookie.png";
import cake from "./assets/cake.png";
import scorn from "./assets/scorn.png";
import financier from "./assets/financier.png";

export const contentState = atom({
  key: "homeContent",
  default: [],
});

export const categoryState = atom({
  key: "homeCategory",
  default: [
    { name: "쿠키", img: cookie },
    { name: "케이크", img: cake },
    { name: "스콘", img: scorn },
    { name: "휘낭시에", img: financier },
  ],
});
