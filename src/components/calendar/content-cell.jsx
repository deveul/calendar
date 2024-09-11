import PropTypes from "prop-types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const CalendarContentCell = ({ day, rowIndex }) => {
  const startTime = day.slots[rowIndex]?.startTime;
  const [colorCounter, setColorCounter] = useState(0);
  const optionsNumericTime = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const getFormattedDate = () => {
    if (!startTime) return "-";
    return startTime
      .toLocaleDateString("fr-FR", optionsNumericTime)
      .split(" ")[1];
  };

  const incrementColor = () => {
    if (!startTime) return;
    setColorCounter((colorCounter) => colorCounter + 1);
  };

  return (
    <td className="px-1 py-1 text-center" onClick={() => incrementColor()}>
      <div
        className={twMerge(
          "w-32 px-6 py-3 rounded-xl text-white",
          startTime && "hover:bg-black hover:text-white",
          colorCounter % 4 === 0 && "bg-gray-100 text-black",
          colorCounter % 4 === 1 && "bg-black",
          colorCounter % 4 === 2 && "bg-blue-500",
          colorCounter % 4 === 3 && "bg-green-500"
        )}
      >
        <p>{getFormattedDate()}</p>
      </div>
    </td>
  );
};

CalendarContentCell.propTypes = {
  day: PropTypes.object,
  rowIndex: PropTypes.number,
};

export default CalendarContentCell;
