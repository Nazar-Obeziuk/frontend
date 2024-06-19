export interface ICatalogProductItem {
  product_id: string | number;
  product_name_en: string;
  product_name_ua: string;
  product_description_en: string;
  product_description_ua: string;
  product_base_price: number;
  product_image_url: string;
  product_created_at: string;
  product_average_rating: number;
  product_reviews_count: number;
}

export interface IProductItemDetails extends ICatalogProductItem {
  product_variations: IProductItemVariations;
}

interface IProductItemVariations {
  colors: IProductItemColors[];
  sizes: IProductItemSizes[];
}

export interface IProductItemColors {
  value: string;
  additional_price: number;
  image_url: string;
  article: string;
  description_en: string;
  description_ua: string;
}

export interface IProductItemSizes {
  value: string;
  additional_price: number;
  image_url: string;
  article: string;
  description_en: string;
  description_ua: string;
}
