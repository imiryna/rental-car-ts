import React from "react";
import { useDispatch } from "react-redux";
import { loadMore } from "../../Store/advert/advertSlice";
import { LoadMoreBtnCss } from "./LoadeMoreButton.styled";

export const LoadeMoreButtn: React.FC = () => {
  const dispatcher = useDispatch();

  const handleLoadMore = () => {
    dispatcher(loadMore());
  };

  return (
    <>
      <LoadMoreBtnCss onClick={handleLoadMore}>Load more</LoadMoreBtnCss>
    </>
  );
};
