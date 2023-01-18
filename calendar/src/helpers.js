import moment from 'moment';



function weekdayShortNames(){
 let weekdayshort = moment.weekdaysShort()

  this.weekdayshort.map(day=>{
  return (
    <div>
    <th key={day} className="week-day">
      {day}
    </th>
</div>
  )})}

export default weekdayShortNames