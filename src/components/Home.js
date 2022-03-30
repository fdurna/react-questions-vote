import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQes } from '../redux/actions/QesAction';

function Home() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getQes())
},[dispatch])
  return (
    <div>Home</div>
  )
}

export default Home