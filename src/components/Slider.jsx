import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import ProductCard from "./ProductCard";
import useproducts from "../hooks/useproducts";

export default function Slider() {
  const{ products, isLoading, error } = useproducts("limit=5&skip=30");


  return (
    <div>
      {isLoading ? "Loading..." : "" }
      {error}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        {products?.slice(0,6)?.map((item)=>(
        <SwiperSlide key={item.id}>
          <ProductCard 
          image={item.thumbnail}
          name={item.title}
          price={item.price}
          discountPercentage={item.discountPercentage}
          rating={item.rating}
        />
      </SwiperSlide>
    
    ))}

    </Swiper>
    </div>
  );
}