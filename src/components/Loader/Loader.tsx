import { Circles } from "react-loader-spinner";
import { Loading } from "./Loader.styled";

export const Loader: React.FC = () => {
  return (
    <Loading>
      <Circles height="80" width="80" color="#407bff" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    </Loading>
  );
};
