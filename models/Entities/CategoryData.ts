export interface Category {
  title: string;
  link: string | null;
  imageName: string;
}

export interface ProductCard {
  title: string;
  shortDescription: string;
  imageName: string;
  cardImage: string;
  buttonTitle: string;
  buttonLink: string;
}
export interface CatalogData {
  title: string;
  fileName: string;
  imageName: string;
}
