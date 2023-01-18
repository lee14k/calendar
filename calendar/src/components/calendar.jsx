import React from 'react';
import './calendar.css'
import moment from "moment";

class Calendar extends React.Component {

  weekdayshort = moment.weekdaysShort();

  weekdayshortname = this.weekdayshort.map(day => {
    return (
      <th key={day} className="week-day">
        <td>{day}</td>
      </th>
    );
  });

  render() {
    return (

      <div>
        <div className='tail-datetime-calendar' >

          <h2>Calendar</h2>
          <form className="calendar" >
            <h3>Pick a Month</h3>


            <input type="month">


            </input>
            <button type="submit">Check Availability</button>
          </form>
          <div>
            {this.weekdayshortname}
          </div>
        </div>
      </div>
    )
  }


}







export default Calendar