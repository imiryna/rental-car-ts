import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentCar } from "../../Store/advert/advertSelector";
import { TextCss, GridWrapCss, ModalCss, ModalContentCss, BtnCss, CloseIcon, ContainerCss, ImgCss, RentalCarBtn, DescriptionCss, RentalConditionBoxCss, RentalConditionPanelCss, BlueTextCss } from "./Modal.styled";
import ICarAdvert from "../../types/rentalCars.types";
import { ModelWrapCss, VerticalLine, ContentBoxCss, ContentInfoCss } from "../../components/CarCard/AdvertCard.styled";

interface IModalProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<IModalProps> = ({ setIsOpenModal }) => {
  const currentCar: ICarAdvert = useSelector(selectCurrentCar);

  const rentalConditions = currentCar.rentalConditions.split("\n");
  rentalConditions.push(`Mileage: ${currentCar.mileage}`);
  rentalConditions.push(`Price: ${currentCar.rentalPrice}`);

  const rentalConditionsTags = rentalConditions?.map((option) => {
    let readyTag: React.JSX.Element = <></>;
    if (option.includes(":")) {
      const splittedString = option.split(":");
      readyTag = (
        <RentalConditionPanelCss>
          {splittedString[0]}: <BlueTextCss>{splittedString[1]}</BlueTextCss>
        </RentalConditionPanelCss>
      );
    } else {
      readyTag = <RentalConditionPanelCss>{option}</RentalConditionPanelCss>;
    }
    return readyTag;
  });

  const closeModal = useCallback(() => {
    document.body.style.overflow = "auto";
    setIsOpenModal(false);
  }, [setIsOpenModal]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => e.code === "Escape" && closeModal();

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [closeModal]);

  const handleClickOverlay = () => {
    closeModal();
  };

  return (
    <>
      {currentCar && (
        <ModalCss onClick={handleClickOverlay}>
          <ModalContentCss>
            <BtnCss onClick={closeModal}>
              <CloseIcon />
            </BtnCss>
            <ContainerCss>
              <ImgCss src={currentCar.img} width={461} height={276} />
            </ContainerCss>
            <ModelWrapCss>
              <ContentBoxCss>
                <ContentInfoCss>{currentCar.make}</ContentInfoCss>
                <ContentInfoCss>
                  <BlueTextCss>{currentCar.model}</BlueTextCss>,
                </ContentInfoCss>
                <ContentInfoCss>{currentCar.year}</ContentInfoCss>
              </ContentBoxCss>
            </ModelWrapCss>
            <GridWrapCss>
              <VerticalLine>{currentCar.address.split(",")[1]}</VerticalLine>

              <VerticalLine>{currentCar.address.split(",")[2]}</VerticalLine>

              <VerticalLine>{currentCar.rentalCompany}</VerticalLine>

              <VerticalLine>{currentCar.type}</VerticalLine>

              <VerticalLine>{currentCar.model}</VerticalLine>

              <VerticalLine>{currentCar.id}</VerticalLine>
              <div> {currentCar.accessories[2]}</div>
            </GridWrapCss>
            <DescriptionCss>{currentCar.description}</DescriptionCss>
            <TextCss>Accessories and functionalities:</TextCss>
            <GridWrapCss>
              {currentCar.accessories.map((item) => (
                <VerticalLine>{item}</VerticalLine>
              ))}
            </GridWrapCss>
            <TextCss>Rental conditions:</TextCss>
            <RentalConditionBoxCss>{rentalConditionsTags}</RentalConditionBoxCss>

            <RentalCarBtn>
              <a href="tel:+380730000000">Rental car</a>
            </RentalCarBtn>
          </ModalContentCss>
        </ModalCss>
      )}
    </>
  );
};
