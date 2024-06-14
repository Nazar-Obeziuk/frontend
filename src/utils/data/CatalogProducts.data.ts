import { ICatalogProductItem } from "../../services/catalog-products/catalog-products.interface";

const catalogProducts: ICatalogProductItem[] = [
  {
    id: "1",
    main_image: "../../images/catalog-product-1.jpg",
    title: "Універсальні ортопедичні устілки",
    main_description:
      "Лікування та профілактика плоскостопості, вальгусної та варусної деформації",
    price: 699,
  },
  {
    id: "2",
    main_image: "../../images/catalog-product-2.jpg",
    title: "Дитячі ортопедичні устілки",
    main_description:
      "Лікування та профілактика плоскостопості, правильне позиціонування стоп, амортизація",
    price: 499,
  },
  {
    id: "3",
    main_image: "../../images/catalog-product-3.jpg",
    title: "Діабетичні ортопедичні устілки",
    main_description:
      "Лікування та профілактика ускладнень стану стоп при захворюванні на цукровий діабет",
    price: 699,
  },
  {
    id: "4",
    main_image: "../../images/catalog-product-4.jpg",
    title: "Спортивні ортопедичні устілки",
    main_description:
      "Лікування та профілактика плоскостопості, амортизація, підвищення витривалості під час занять спортом",
    price: 599,
  },
];

export { catalogProducts };
