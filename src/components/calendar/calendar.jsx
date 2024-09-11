import { useEffect } from "react";
import { useState } from "react";
import CalendarHeader from "./header";
import ChevronLeftIcon from "../../assets/icons/chevron-left";
import ChevronRightIcon from "../../assets/icons/chevron-right";

const createDays = (firstDay) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(firstDay);
    currentDay.setDate(firstDay.getDate() + i);
    days.push({ date: currentDay });
  }
  return days;
};

const Calendar = () => {
  const today = new Date();
  const [firstDay, setFirstDay] = useState(today);
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(createDays(firstDay));
  }, [firstDay]);

  const getPrevWeek = () => {
    const prevWeekStart = new Date(firstDay);
    prevWeekStart.setDate(firstDay.getDate() - 7);
    setFirstDay(prevWeekStart);
  };

  const getNextWeek = () => {
    const nextWeekStart = new Date(firstDay);
    nextWeekStart.setDate(firstDay.getDate() + 7);
    setFirstDay(nextWeekStart);
  };

  return days ? (
    <>
      <button
        onClick={getPrevWeek}
        disabled={firstDay.getDate() === today.getDate()}
        className="disabled:opacity-60"
      >
        <ChevronLeftIcon />
      </button>
      <table>
        <CalendarHeader days={days} />
      </table>
      <button onClick={getNextWeek}>
        <ChevronRightIcon />
      </button>
    </>
  ) : (
    <></>
  );
};

export default Calendar;
