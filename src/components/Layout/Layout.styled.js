import styled from "styled-components";

export const MainWrapCss = styled.div`
  position: fixed;
  top: 0;
  padding: 150px 290px 0 290px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  z-index: 10;
  background-color: var(--primary-white);
`;

export const BoxGrid = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
`;

export const TextMenuPrise = styled.span`
  color: rgb(18, 20, 23);
  font-family: var(--primary-font);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  text-align: left;
  margin-right: 11px;
`;

export const SearchBtnCss = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 44px;
  border-radius: 12px;
  background-color: var(--primary-blue);
  cursor: pointer;
  margin-top: 15px;

  color: var(--primary-white);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;

  &:hover {
    background-color: var(--secondary-blue);
  }
`;
export const WrapMenuCss = styled.div`
  border-radius: 0px 14px 14px 0px;

  background: rgb(247, 247, 251);
  display: flex;
  gap: 50px;

  padding: 14px 18px 14px 18px;
  cursor: pointer;
  color: rgb(18, 20, 23);
  font-family: var(--primary-font);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  text-align: left;
`;
