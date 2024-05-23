import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';

const CovidData = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>COVID-19 Nigeria Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <h3>{item.state}</h3>
            <p>Total Cases: {item.totalconfirmedcases}</p>
            <p>Total Deaths: {item.totaldeath}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CovidData;