import React, { useState } from 'react'
import DayPicker from 'react-day-picker'
import { useHistory } from "react-router-dom";
import { getDateString } from '../util';
import 'react-day-picker/lib/style.css';

export const DashboardContainer = () => {
  const [_ignore, setDay] = useState(null)
  const history = useHistory()

  const handleDayClick = (day) => {
    setDay(day)
    let date = getDateString(day)
    history.push(`/journal/${date}`)
  }

  return (
    <div>
      <DayPicker onDayClick={handleDayClick} />
    </div>
  )
}

export default DashboardContainer
