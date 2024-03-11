import { useEffect, useState } from "react";
import { AdvertCard } from "../../components/CarCard/AdvertCard";
import { useSelector, useDispatch } from "react-redux";
import { selectCarsAdvert, selectFilteredCarsAdvert, selectPage, selectIsLoading } from "../../Store/advert/advertSelector";
import { getAllAdvertThunk } from "../../Store/advert/advertThunk";
import { MainWrapCss, BoxListCss } from "./AdvertList.styled";
import { Loader } from "../../components/Loader/Loader";
import { Modal } from "../../components/Modal/Modal";
import { LoadeMoreButtn } from "../../components/LoadeMoreButton/LoadeMoreButton";
import ICarAdvert from "../../types/rentalCars.types";
import { AppDispatch } from "../../Store/store";

export const AdvertList = () => {
  const dispatcher: AppDispatch = useDispatch();
  const allCarsAdvert: Array<ICarAdvert> = useSelector(selectCarsAdvert);
  const allFilteredCarsAdvert: Array<ICarAdvert> = useSelector(selectFilteredCarsAdvert);
  const currentPage: number = useSelector(selectPage);
  const isLoading: boolean = useSelector(selectIsLoading);

  const shownCars: Array<ICarAdvert> = allFilteredCarsAdvert.length > 0 ? allFilteredCarsAdvert : allCarsAdvert;

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatcher(getAllAdvertThunk(currentPage));
  }, [dispatcher, currentPage]);

  return (
    <>
      <MainWrapCss id="maina-wrappa">
        {shownCars.map((item) => (
          <BoxListCss key={item.id}>
            <AdvertCard carInfo={item} setIsOpenModal={setIsOpenModal} />
          </BoxListCss>
        ))}
        {isLoading && <Loader />}
        {!isLoading && <LoadeMoreButtn />}
        {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      </MainWrapCss>
    </>
  );
};
