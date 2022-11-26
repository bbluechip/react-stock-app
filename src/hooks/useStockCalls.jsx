import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const getFirms = async () => {
    const url = "firms";
    const BASE_URL = "https://13648.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return <div>useStockCalls</div>;
};

export default useStockCalls;
