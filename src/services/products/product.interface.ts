export interface IProduct {
  id: number;
  name_ua: string;
  name_en: string;
  description_ua: string;
  description_en: string;
  base_price: number;
  article: string;
  image_url: string[];
}

export interface IProductDetails {}

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
