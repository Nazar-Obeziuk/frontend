export interface IReview {
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

export interface IReviewGeneral {
  id: number;
  stars: number;
  name_ua: string;
  name_en: string;
  description_ua: string;
  description_en: string;
}
