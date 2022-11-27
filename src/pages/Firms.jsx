import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {
  const { getFirms } = useStockCalls();

  useEffect(() => {
    getFirms();
    // eslint-disable-next-line
  }, []);

  return <div>Firms</div>;
};

export default Firms;
