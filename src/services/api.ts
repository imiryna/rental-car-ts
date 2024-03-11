import { fetchAdvert } from "./baseUrl";
import ICarAdvert from "../types/rentalCars.types";

export const getAllAdvert = async (page: number) => {
  const { data } = await fetchAdvert.get<ICarAdvert>(`/advert?limit=12&p=${page}`);

  return data;
};

export const getCarById = async (carId: number) => {
  const { data } = await fetchAdvert.get<Array<ICarAdvert>>(`/advert?id=${carId}`);
  return data.pop();
};
