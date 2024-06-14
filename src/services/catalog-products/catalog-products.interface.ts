export interface ICatalogProductItem {
  id: string;
  main_image: string;
  title: string;
  main_description: string;
  price: number;
  images?: ["image1", "image2", "image3", "image4"];
  article?: string;
  sizes?: any[];
  description?: string;
  reviews?: ICatalogProductReview[];
}

interface ICatalogProductCharacteristics {
  product_id: string;
  characteristics_description: string;
  type: string;
  brand: string;
  made: string;
  appointment: string;
  base_material: string;
  coverage_material: string;
  size: string;
}

interface ICatalogProductReview {
  stars: number;
  name: string;
  date: string;
  experience: string;
  pluses: string;
  minuses: string;
}

/* 
[
    { size: 21, size_description: '21 розмір (13,7 см)' }
    { size: 22, size_description: '22 розмір (14,4 см)' }
    { size: 23, size_description: '23 розмір (15,1 см)' }
    { size: 24, size_description: '24 розмір (13,7 см)' }
    { size: 25, size_description: '25 розмір (13,7 см)' }
    { size: 26, size_description: '26 розмір (13,7 см)' }
]
*/
