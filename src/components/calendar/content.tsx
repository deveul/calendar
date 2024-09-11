import { Day } from "../../types/types";
import CalendarContentCell from "./content-cell";

const CalendarContent = ({ days }: { days: Day[] }) => {
  return (
    <tbody>
      {Array.from({ length: 10 }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {days.map((day, colIndex) => (
            <CalendarContentCell
              key={`${rowIndex}-${colIndex}-${day.date}`}
              day={day}
              rowIndex={rowIndex}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default CalendarContent;
