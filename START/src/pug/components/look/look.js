"use strict";
import Plyr from "plyr";

export const Look = () => {
  if (document.querySelector("#player-1")) {
    const r = document.querySelector("#player-1");
    const simplePlir1 = new Plyr(r);
  }
  if (document.querySelector("#player-2")) {
    const r = document.querySelector("#player-2");
    const simplePlir2 = new Plyr(r);
  }
};