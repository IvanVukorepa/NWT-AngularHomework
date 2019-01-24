import { ReviewInterface } from './ReviewInterface';

export interface ProductInterface {
    id: number,
    name: string,
    imgUrl: string,
    price: number,
    description: string,
    favorite: boolean,
    rated: Array<number>,
    reviews: ReviewInterface[]
  }