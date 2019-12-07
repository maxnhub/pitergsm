import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
    require("file-loader!./index.pug");
}

import "./scripts/swiper.min";
import "./scripts/swiper";
import "./scripts/ScrollMagic.min";
import "./scripts/scroll";