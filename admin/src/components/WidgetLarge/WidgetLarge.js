import React, { useState, useEffect } from 'react'
import { userRequest } from 'service/baseRequest';
import "./WidgetLarge.scss";
import {format} from 'timeago.js';

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders");
        setOrders(res.data);
      } catch (error) {
        console.log('error..', error);
      }
    }
    getOrders();
  }, []);


  const Button = ({ type }) => {
    return (
      <button className={'widgetButton ' + type}>{type}</button>
    )
  }

  return (
    <div className="widgetLargeContainer">
      <h3 className="widgetLargeTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {
            orders.map(order => (
              <tr key={order?._id} className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{order?.userId}</span>
                </td>
                <td className="widgetLgDate">{format(order?.createdAt)}</td>
                <td className="widgetAmount">${order?.amount}</td>
                <td className="widgetStatus">
                  <Button type={order?.status} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLarge
