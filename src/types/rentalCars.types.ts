export default interface ICarAdvert {
  id: string;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string; // "3.6L V6"
  accessories: Array<string>;
  functionalities: Array<string>;
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}
