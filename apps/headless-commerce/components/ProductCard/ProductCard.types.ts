export interface IProductCard {
  id: string;
  name: string;
  url: string;
  price: number;
  desktopImage: {
    breakpoint: string;
    srcset: string;
    url: string;
  };
  mobileImage: {
    breakpoint: string;
    srcset: string;
    url: string;
  };
  materialValue?: string;
}
