import { useEffect, useState, useMemo } from 'react';
import Chart from 'components/Chart/Chart';
import WidgetLarge from 'components/WidgetLarge/WidgetLarge';
import WidgetSmall from 'components/WidgetSmall/WidgetSmall';
import FeaturedInfo from 'pages/featuredInfo/FeaturedInfo';
import React from 'react'
import { userData } from 'Ultils/dummyData';
import './Home.scss';
import { userRequest } from 'service/baseRequest';

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStarts = async () => {
      try {
        const res = await userRequest.get('/users/starts');
        res.data.map(item => setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], "Active User": item.total }]))
      } catch (error) {
        console.log('getStarts error..', error);
      }
    };
    getStarts();
  }, [MONTHS]);
  return (
    <div className="homeContainer">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home
