import styled from "styled-components";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as HeartIco } from "../../images/heart1.svg";

export const WraperCss = styled.div`
  width: 276px;
  display: flex;
  flex-direction: column;
  background: #f3f3f2, linear-gradient(180deg, #121417 0%, rgba(18, 20, 23, 0) 100%);

  position: relative;
`;

export const ImgCss = styled.img`
  border-radius: 14px;
  width: 268px;
  height: 274px;
  margin-bottom: 14px;
`;

export const HeartIcon = styled(Heart)`
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:hover {
    fill: var(--primary-blue);
    stroke: none;
  }
  &:active {
    fill: var(--primary-blue);
    stroke: none;
  }
`;

export const BlueHeartIcon = styled(HeartIco)`
  cursor: pointer;
  fill: var(--primary-blue);
  &:hover {
    fill: var(--primary-blue);
    stroke: none;
  }
  &:active {
    fill: var(--primary-blue);
    stroke: none;
  }
`;

export const BtnCss = styled.button`
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 13px;
`;

export const ContentBoxCss = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding: 0px;
`;

export const ContentInfoCss = styled.div`
  color: var(--primary-black);
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  text-align: left;
`;

export const PriceContentCss = styled.div`
  color: var(--primary-black);
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-right: 10px;
  text-align: left;
`;

export const ModelWrapCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const GrigWrapCss = styled.div`
  color: var(--secondary-color);
  font-family: var(--primary-font);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  width: 274px;
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

export const VerticalLine = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-family: var(--primary-font);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  border-right: 1px solid var(--secondary-color);
  padding-left: 6px;
  padding-right: 6px;

  /* &::after {
    border-top: 1px solid var(--secondary-color);
    content: "";
    display: block;
    width: 1px; 
    height: 16px; 
    background-color: black; 
    position: absolute;
    right: 0;
    top: 0;
  } */
`;
export const ButtonCss = styled.button`
  width: 274px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 99px 12px 99px;
  margin-top: 24px;

  border-radius: 12px;
  cursor: pointer;
  background: var(--primary-blue);

  color: var(--primary-white);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  text-align: center;

  &:hover {
    background: var(--secondary-blue);
  }
`;
