export interface IIndividualInsole {
  id: number;
  image_url: string[];
  name_ua: string;
  name_en: string;
  reviews_count: number;
  article: string;
  article_variation_ua: string;
  article_variation_en: string;
  base_price: number;
  first_about_description_ua: string;
  first_about_description_en: string;
  second_about_description_ua: string;
  second_about_description_en: string;
  third_about_description_ua: string;
  third_about_description_en: string;
  fourth_about_description_ua: string;
  fourth_about_description_en: string;
  characteristics_subtitle_ua: string;
  characteristics_subtitle_en: string;
  characteristics_description_ua: string;
  characteristics_description_en: string;
  characteristics_ua: ICharacteristics;
  characteristics_en: ICharacteristics;
}

interface ICharacteristics {
  [key: string]: string;
}

export interface IIndividualVariation {
  id: number;
  individual_id: number;
  variation_type: string;
  variation_value: string;
  additional_price: number;
  image: string;
  image_url: string[];
  article: string;
  category: string;
  variation_description_en: string;
  variation_description_ua: string;
  first_about_description_ua: string;
  first_about_description_en: string;
  second_about_description_ua: string;
  second_about_description_en: string;
  third_about_description_ua: string;
  third_about_description_en: string;
  fourth_about_description_ua: string;
  fourth_about_description_en: string;
  characteristics_subtitle_ua: string;
  characteristics_subtitle_en: string;
  characteristics_description_ua: string;
  characteristics_description_en: string;
  characteristics_ua: ICharacteristics;
  characteristics_en: ICharacteristics;
}
