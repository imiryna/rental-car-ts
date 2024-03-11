import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { commonFilter, setFilterMake, setFilterPrice } from "../../Store/advert/advertSlice";
import { ButtonGoBackCss } from "./ButtonGoBack.style";

export const ButtonGoBack = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    dispatcher(commonFilter({ make: "", price: "" }));
    dispatcher(setFilterMake(""));
    dispatcher(setFilterPrice(""));
  };

  return (
    <div>
      <ButtonGoBackCss id="12345" onClick={goBack}>
        Go back
      </ButtonGoBackCss>
    </div>
  );
};
