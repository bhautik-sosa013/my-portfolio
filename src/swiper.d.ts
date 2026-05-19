declare module "swiper" {
  export { default as SwiperCore } from "swiper/types";
  export * from "swiper/types";
  export const Pagination: any;
  export const Autoplay: any;
}

declare module "swiper/react" {
  import type { SwiperOptions } from "swiper/types";
  import type { JSX } from "react";

  interface SwiperProps
    extends Omit<React.HTMLAttributes<HTMLElement>, "onProgress" | "onClick" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTransitionEnd">,
      SwiperOptions {
    children?: React.ReactNode;
    modules?: any[];
  }

  interface SwiperSlideProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
  }

  export const Swiper: React.FC<SwiperProps>;
  export const SwiperSlide: React.FC<SwiperSlideProps>;
}

declare module "swiper/css" {}
declare module "swiper/css/navigation" {}
declare module "swiper/css/pagination" {}
declare module "swiper/css/scrollbar" {}
