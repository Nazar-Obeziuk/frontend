interface ICharacteristics {
  [key: string]: string;
}

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
  reviews_count: number;
  characteristics_ua: ICharacteristics;
  characteristics_en: ICharacteristics;
  description_details_en: string;
  description_details_ua: string;
  description_characteristics_ua: string;
  description_characteristics_en: string;
}

export interface IProductDetails {
  article: string;
  average_rating: number;
  base_price: number;
  description_en: string;
  description_ua: string;
  image_url: string[];
  name_en: string;
  name_ua: string;
  product_id: number;
  reviews_count: number;
  description_details_en: string;
  description_details_ua: string;
  description_characteristics_ua: string;
  description_characteristics_en: string;
  characteristics_en: ICharacteristics;
  characteristics_ua: ICharacteristics;
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
  image_url: string[];
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
  created_at?: string;
}
