export type PromotionEvent = {
  ecommerce: {
    [name: string]: {
      promotions: [
        {
          [key: string | number]: string | number;
        },
      ];
    };
  };
};
