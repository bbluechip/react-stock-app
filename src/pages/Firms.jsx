import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {
  const { getFirms, getSales } = useStockCalls();

  useEffect(() => {
    getFirms();
    getSales();
    // eslint-disable-next-line
  }, []);

  return <div>Firms</div>;
};

export default Firms;
