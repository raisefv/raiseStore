import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products?category=clothing";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const res = await axios.get<IProduct[]>(BASE_URL);
    return res.data;
  } catch (error) {
    console.error("Ошибка при загрузке продуктов:", error);
    return [];
  }
};
