export interface IProduct {
  id: number;
  product_id: number;
  name_ua: string;
  name_en: string;
  description_ua: string;
  description_en: string;
  base_price: number;
  article: string;
  image_url: string[];
  characteristics: {};
}

export interface IProductDetails {
  article: string;
  average_ration: number;
  base_price: number;
  description_en: string;
  description_ua: string;
  image_url: string[];
  name_en: string;
  name_ua: string;
  product_id: number;
  reviews_count: number;
  variations: {
    colors: Array<any>;
    sizes: Array<any>;
  };
}

export interface IProductVariation {
  id: number;
  product_id: number;
  variation_type: string;
  variation_value: string;
  additional_price: number;
  image_url: string;
  article: string;
  description_en: string;
  description_ua: string;
}

export interface IProductReview {
  id: number;
  stars: number;
  name_ua: string;
  name_en: string;
  description_ua: string;
  description_en: string;
  pluses_ua: string;
  pluses_en: string;
  minuses_ua: string;
  minuses_en: string;
  product_id: number | null;
}
