import Chart from 'components/Chart/Chart';
import WidgetLarge from 'components/WidgetLarge/WidgetLarge';
import WidgetSmall from 'components/WidgetSmall/WidgetSmall';
import FeaturedInfo from 'pages/featuredInfo/FeaturedInfo';
import React from 'react'
import { userData } from 'Ultils/dummyData';
import './Home.scss';

const Home = () => {
  return (
    <div className="homeContainer">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home
