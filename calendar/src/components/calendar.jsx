import React from 'react';
import moment from 'moment';
import './calendar.css'
class Calendar extends React.Component {
  weekdayshort = moment.weekdaysShort();

  render() {
    return(
   
<div>
<div className='tail-datetime-calendar'>

  <h2>Calendar</h2>

<weekdayshortname/>

</div>
</div>
    )}}



export default Calendar