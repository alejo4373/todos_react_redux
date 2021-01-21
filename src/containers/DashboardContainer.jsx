import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useHistory } from "react-router-dom";
import { getDateString } from '../util';
import 'react-datepicker/dist/react-datepicker.css'

export const DashboardContainer = () => {
  const [date, setDate] = useState(new Date())
  const history = useHistory()

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate)
    let date = getDateString(selectedDate)
    history.push(`/journal/${date}`)
  }

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        inline
      />
    </div>
  )
}

export default DashboardContainer
