"use strict";
import Plyr from "plyr";

export const Look = () => {
  if (document.querySelector("#player-1")) {
    const r = document.querySelector("#player-1");
    const simplePlir = new Plyr(r);
  }
};
