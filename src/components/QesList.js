import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQes } from "../redux/actions/QesAction";
import QesDetail from "./QesDetail";

function QuesList() {
  const { qes, loading } = useSelector((state) => state.QesReducers);
  const dispatch = useDispatch();
  console.log(qes);
  useEffect(() => {
    dispatch(getQes());
  }, [dispatch]);
  console.log(qes);
  return (
    <>
      {qes.map((item) => (
        <QesDetail item={item} key={item.id} />
      ))}
    </>
  );
}

export default QuesList;
