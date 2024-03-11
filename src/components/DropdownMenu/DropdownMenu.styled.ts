import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../../images/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../images/arrow-down.svg";

export const ContainerMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8;
  padding: 14px 18px;

  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  overflow-y: scroll;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  background: rgb(255, 255, 255);
  background-color: var();
`;

export const MenuItemsCss = styled.li`
  color: rgba(18, 20, 23, 0.2);
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  text-align: left;
`;

export const BoxForFilterCss = styled.div``;

export const TitleCss = styled.span`
  color: var(--secondary-color);
  font-family: var(--primary-font);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
`;

export const BoxDropMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: 14px;
  background-color: var(--secondary-grey);
`;

export const ArrowUpIcon = styled(ArrowUp)`
  width: 10px;
  height: 5px;
`;

export const ArrowDownIcon = styled(ArrowDown)`
  width: 10px;
  height: 5px;
`;

export const BtnCss = styled.button`
  width: 20px;
  height: 20px;
  border: transparent;
  background-color: inherit;
`;

export const TextMenuModel = styled.span`
  color: rgb(18, 20, 23);
  font-family: var(--primary-font);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  text-align: left;
  margin-right: 51px;
`;

export const DropdownPanelCss = styled.div`
  border-radius: 14px;
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
