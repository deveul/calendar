import PropTypes from "prop-types";

const CalendarContent = ({ days }) => {
  const optionsNumericTime = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const getDateFormatted = (slot) => {
    if (!slot || !slot.startTime) return "-";
    return slot.startTime
      .toLocaleDateString("fr-FR", optionsNumericTime)
      .split(" ")[1];
  };
  return (
    <tbody>
      {Array.from({ length: 10 }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {days.map((day, colIndex) => (
            <td key={colIndex} className="px-1 py-1 text-center ">
              <div className="bg-gray-100 w-32 px-6 py-3 rounded-xl hover:bg-black hover:text-white">
                <p>{getDateFormatted(day.slots[rowIndex])}</p>
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

CalendarContent.propTypes = {
  days: PropTypes.array,
};

export default CalendarContent;
