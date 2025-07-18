import axios from "axios";

const BASE_URL = `https://fakestoreapi.com/products/`;

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const fetchProductByID = async (id: number): Promise<IProduct> => {
  try {
    const res = await axios.get<IProduct>(`${BASE_URL}${id}`);
    return res.data;
  } catch (error) {
    console.error("Ошибка при загрузке продуктa:", error);
    throw error;
  }
};
