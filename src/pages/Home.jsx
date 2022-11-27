import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const { getFirms, getSales } = useStockCalls();

  useEffect(() => {
    getFirms();
    getSales();
    // eslint-disable-next-line
  }, []);
  return <div>Home</div>;
};

export default Home;
