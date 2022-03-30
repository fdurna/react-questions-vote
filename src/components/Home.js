import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQes } from '../redux/actions/QesAction';

function Home() {

  const {qes,loading} = useSelector((state) => state.QesReducers);
  const dispatch = useDispatch();
  console.log(qes)
  useEffect(()=> {
    dispatch(getQes())
},[dispatch])

  return (
    <div>Home</div>
  )
}

export default Home