import React from 'react'
import "./WidgetLarge.scss";

const WidgetLarge = () => {
  const Button = ({type}) => {
    return(
      <button className={'widgetButton ' + type}>{type}</button>
    )
  }

  return (
    <div className="widgetLargeContainer">
      <h3 class="widgetLargeTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td class="widgetLgUser">
            <img 
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span class="widgetLgName">Susan Carol</span>
          </td>
          <td class="widgetLgDate">2 Jun 2021</td>
          <td class="widgetAmount">$2000</td>
          <td class="widgetStatus">
            <Button type={'Pending'}/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td class="widgetLgUser">
            <img 
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span class="widgetLgName">Susan Carol</span>
          </td>
          <td class="widgetLgDate">2 Jun 2021</td>
          <td class="widgetAmount">$2000</td>
          <td class="widgetStatus">
            <Button type={'Approve'}/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td class="widgetLgUser">
            <img 
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span class="widgetLgName">Susan Carol</span>
          </td>
          <td class="widgetLgDate">2 Jun 2021</td>
          <td class="widgetAmount">$2000</td>
          <td class="widgetStatus">
            <Button type={'Approve'}/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td class="widgetLgUser">
            <img 
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span class="widgetLgName">Susan Carol</span>
          </td>
          <td class="widgetLgDate">2 Jun 2021</td>
          <td class="widgetAmount">$2000</td>
          <td class="widgetStatus">
            <Button type={'Declined'}/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td class="widgetLgUser">
            <img 
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span class="widgetLgName">Susan Carol</span>
          </td>
          <td class="widgetLgDate">2 Jun 2021</td>
          <td class="widgetAmount">$2000</td>
          <td class="widgetStatus">
            <Button type={'Declined'}/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLarge
