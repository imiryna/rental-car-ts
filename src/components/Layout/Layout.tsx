import { DropdownMenu } from "../../components/DropdownMenu/DropdownMenu";
import { MainWrapCss, BoxGrid, SearchBtnCss, WrapMenuCss } from "./Layout.styled";
import { Outlet, useNavigate } from "react-router-dom";
import { selectCarMake, selectCarPrices, selectfilteredMake, selectfilteredPrice } from "../../Store/advert/advertSelector";
import { useSelector, useDispatch } from "react-redux";
import { commonFilter, setFilterMake, setFilterPrice } from "../../Store/advert/advertSlice";

export const Layout = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const allCarMake = useSelector(selectCarMake);
  const allCarPrice = useSelector(selectCarPrices);
  const makeFilter = useSelector(selectfilteredMake);
  const priceFilter = useSelector(selectfilteredPrice);

  const handleInputFilter = () => {
    if (makeFilter === "" && priceFilter === "") {
      alert("Choose one of the filters to search");
    }
    dispatcher(commonFilter({ make: makeFilter, price: priceFilter }));
    navigate("/catalog");
  };

  return (
    <div>
      <MainWrapCss>
        <BoxGrid>
          <DropdownMenu options={allCarMake} title="Car brand" placeHolder="Enter the text" handleFunction={setFilterMake} />
          <DropdownMenu options={allCarPrice} title="Prices" placeHolder="To $" handleFunction={setFilterPrice} />
          {/* <DropdownMenu title="Prices" placeHolder="To $" handleFunction={setFilterPrice}>
            {allCarPrice}
          </DropdownMenu> */}
          {/* <DropdownMenu title="Сar mileage / km" placeHolder="Enter the text" handleFunction={setFilterMake}>
            <WrapMenuCss>
              <span>From</span> <span>To</span>
            </WrapMenuCss>
          </DropdownMenu> */}
          <SearchBtnCss onClick={handleInputFilter}>Search</SearchBtnCss>
        </BoxGrid>
      </MainWrapCss>
      <Outlet />
    </div>
  );
};
