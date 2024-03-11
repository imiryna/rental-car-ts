import styled from "styled-components";
import { ReactComponent as Close } from "../../images/close.svg";

export const ModalCss = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 15;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContentCss = styled.div`
  /* pop up */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-white);
  width: 541px;
  padding: 40px 35px 40px;
  border-radius: 24px;
  /* z-index: 15; */
  overflow: hidden;

  @media (max-width: 768px) {
    /* width: 541px; */
  }
`;

export const BtnCss = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  top: 6px;
  right: 6px;
  z-index: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  width: 16px;
  height: 16px;
`;
export const ContainerCss = styled.div`
  width: 461px;
`;

export const ImgCss = styled.img`
  border-radius: 14px;
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export const RentalCarBtn = styled.button`
  width: 168px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 50px 12px 50px;
  border-radius: 12px;
  background-color: var(--primary-blue);
  cursor: pointer;

  &:hower {
    background-color: var(--secondary-blue);
  }

  color: var(--primary-white);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
`;

export const DescriptionCss = styled.div`
  color: rgb(18, 20, 23);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  margin-top: 14px;
  margin-bottom: 24px;
`;
export const TextCss = styled.p`
  text-align: left;
`;

export const RentalConditionBoxCss = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RentalConditionPanelCss = styled.button`
  color: rgb(54, 53, 53);
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 35px;
  background-color: var(--secondary-grey);
  justify-content: center;
  align-items: center;
  padding: 7px 14px 7px 14px;
  font-family: var(--secondary-font);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
`;

export const BlueTextCss = styled.span`
  color: rgb(52, 112, 255);
`;

export const GridWrapCss = styled.div`
  color: var(--secondary-color);
  font-family: var(--primary-font);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  /* width: 274px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;

  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 8px;
  position: relative;
  flex-wrap: wrap;
`;
