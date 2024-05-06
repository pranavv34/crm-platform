import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/images/bg1.png";
import img2 from "../assets/images/bg2.png";
import img3 from "../assets/images/bg3.png";
import img4 from "../assets/images/bg4.png";
import img5 from "../assets/images/bg5.png";

export default function Front() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <section className="z-10 w-full h-full pb-20">
      <div className="sm:w-11/12 mx-auto h-full">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          pagination={false}
          className="h-full"
        >
          <div>
            <img src={img1} alt="Image 1" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={img2} alt="Image 2" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={img3} alt="Image 3" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={img4} alt="Image 4" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={img5} alt="Image 5" className="w-full h-full object-cover" />
          </div>
          {/* Add more images as needed */}
        </Carousel>
      </div>
    </section>
  );
}
