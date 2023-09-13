export interface AuthProps {
  username: string;
  password: string;
  email: string;
}

export interface WinesProps {
  key: string;
  quantity: number;
  _id: string;
  name: string;
  grape: string;
  category: string;
  stock: number;
  price: number;
  image: string;
  desc: string;
  vintage: string;
  winery: string;
  country: string;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
}

export interface Product {
  key: string;
  _id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
  vintage: string;
  winery: string;
  country: string;
  quantity: number;
}
