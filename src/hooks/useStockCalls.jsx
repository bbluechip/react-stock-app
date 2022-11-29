import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //?   GET CALLS

  const getStockData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);

      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");

  //! DELETE CALLS

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`Firm successfully deleted`);
      getStockData(url);
    } catch (error) {
      console.log("error :", error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };
  const deleteFirm = (id) => deleteStockData("firms", id);

  return { getFirms, getSales, deleteFirm, getStockData };
};

export default useStockCalls;
