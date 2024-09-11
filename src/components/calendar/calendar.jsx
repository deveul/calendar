import { useEffect } from "react";
import { useState } from "react";
import CalendarHeader from "./header";
import ChevronLeftIcon from "../../assets/icons/chevron-left";
import ChevronRightIcon from "../../assets/icons/chevron-right";
import { getRndInteger } from "../../utils/math";
import CalendarContent from "./content";

const sortAndRemoveDuplicateSlots = (slots) => {
  const startTimes = new Set();
  const filteredSlots = slots.filter((slot) => {
    const slotTime = slot.startTime.getTime();
    if (startTimes.has(slotTime)) {
      return false;
    }
    startTimes.add(slotTime);
    return true;
  });
  return filteredSlots.sort((a, b) => a.startTime - b.startTime);
};

const createSlotsPerDay = (date) => {
  const numbersOfSlots = getRndInteger(1, 11);
  const slots = [];
  for (let i = 0; i < numbersOfSlots; i++) {
    const startTime = new Date(date);
    startTime.setHours(
      getRndInteger(8, 19),
      getRndInteger(0, 2) === 1 ? 30 : 0,
      0
    );
    const endTime = new Date(startTime.getTime() + 30 * 60000);
    slots.push({ startTime, endTime });
  }
  return sortAndRemoveDuplicateSlots(slots);
};

const createDays = (firstDay) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(firstDay);
    currentDay.setDate(firstDay.getDate() + i);
    days.push({ date: currentDay, slots: createSlotsPerDay(currentDay) });
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

  return (
    <div className="flex items-start justify-center">
      <button
        onClick={getPrevWeek}
        disabled={firstDay.getDate() === today.getDate()}
        className="disabled:opacity-60"
      >
        <ChevronLeftIcon />
      </button>
      <table>
        <CalendarHeader days={days} />
        <CalendarContent days={days} />
      </table>
      <button onClick={getNextWeek}>
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Calendar;
