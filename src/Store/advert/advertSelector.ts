import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const selectCarsAdvert = (state: RootState) => state.advert.carsAdvert;
export const selectFilteredCarsAdvert = (state: RootState) => state.advert.filteredCarList;
export const selectError = (state: RootState) => state.advert.error;
export const selectIsLoading = (state: RootState) => state.advert.isLoading;
export const selectPage = (state: RootState) => state.advert.pages;
export const selectCurrentCar = (state: RootState) => state.advert.currentCar;
export const selectFavorites = (state: RootState) => state.advert.favorites;
export const selectfilteredMake = (state: RootState) => state.advert.filteredMake;
export const selectfilteredPrice = (state: RootState) => state.advert.filteredPrice;

export const selectCarMake = createSelector([selectCarsAdvert], (allCars) => {
  const makers: Array<string> = allCars.map((car) => car.make);
  const makersSet = new Set<string>(makers);
  return Array.from(makersSet.values());
});

export const selectCarPrices = createSelector([selectCarsAdvert], (allCars) => {
  const prices: Array<string> = allCars.map((car) => car.rentalPrice.slice(1));
  const pricesSet = new Set<string>(prices);
  return Array.from(pricesSet.values());
});
