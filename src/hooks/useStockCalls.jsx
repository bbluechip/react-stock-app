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

  //! POST CALLS

  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`Firm successfully added`);
      getStockData(url);
    } catch (error) {
      console.log("error :", error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

  const postFirm = (info) => postStockData(info, "firms");

  return {
    getFirms,
    getSales,
    deleteFirm,
    getStockData,
    postFirm,
    postStockData,
  };
};

export default useStockCalls;
