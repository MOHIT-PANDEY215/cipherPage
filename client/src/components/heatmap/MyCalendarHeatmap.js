import React from 'react';
// import ReactTooltip from 'react-tooltip';
import CalendarHeatmap from 'react-calendar-heatmap';

import 'react-calendar-heatmap/dist/styles.css';
import './heatmap.module.css'

const MyCalendarHeatmap = () => {

  const today= new Date()

  const shiftDate=(date, numDays)=> {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  
  const getRange=(count)=> {
    return Array.from({ length: count }, (_, i) => i);
  }
  
  const getRandomInt=(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Data for the heatmap
  const data = getRange(365).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(0, 3),
    };
  });

  return (
    <div>
      <div className={`text-white text-lg uppercase`}>Cipher Map</div>
    <CalendarHeatmap
      values={data}
      startDate={shiftDate(today, -365)}
        endDate={today}
      showWeekdayLabels
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }
        return `color-github-${value.count}`;
      }}
      tooltipDataAttrs={(value) => {
        return {
          'data-tip': `${value.date}: ${value.count} occurrences`,
        };
      }}
    />
    {/* <ReactTooltip /> */}
    </div>
  );
};

export default MyCalendarHeatmap;
