import { useState } from "react";
import { MenuItemsCss, ContainerMenu, DropdownPanelCss, BoxForFilterCss, TitleCss, BoxDropMenu, ArrowUpIcon, ArrowDownIcon, BtnCss, TextMenuModel } from "./DropdownMenu.styled";

import { useDispatch } from "react-redux";

import { AppDispatch } from "../../Store/store";

type Props = {
  options: Array<string>;
  title: string;
  placeHolder?: string;
  handleFunction: Function;
};

export const DropdownMenu: React.FC<Props> = ({ options, title, placeHolder, handleFunction }) => {
  const [isToggledDropdown, setIsToggledDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dispatcher: AppDispatch = useDispatch();

  const handleToggleDropdown = () => {
    setIsToggledDropdown(!isToggledDropdown);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsToggledDropdown(false);
    dispatcher(handleFunction(option));
  };

  return (
    <BoxForFilterCss>
      <TitleCss>{title}</TitleCss>
      <DropdownPanelCss>
        {selectedOption ? selectedOption : placeHolder}
        <BtnCss onClick={handleToggleDropdown}>{isToggledDropdown ? <ArrowDownIcon /> : <ArrowUpIcon />}</BtnCss>
      </DropdownPanelCss>
      {isToggledDropdown && (
        <BoxDropMenu>
          <TextMenuModel>
            <ContainerMenu>
              {options.map((item) => (
                <MenuItemsCss key={item} onClick={() => handleOptionClick(item)}>
                  {item}
                </MenuItemsCss>
              ))}
            </ContainerMenu>
          </TextMenuModel>
        </BoxDropMenu>
      )}
    </BoxForFilterCss>
  );
};
