import PropTypes from "prop-types";

const CalendarHeader = ({ days }) => {
  const optionsWeekDay = {
    weekday: "short",
  };
  const optionsDate = {
    day: "numeric",
    month: "short",
  };

  return (
    <thead>
      <tr>
        {days.map((day) => {
          return (
            <th key={day.date}>
              <div className="flex flex-col p-4 items-center w-32">
                <p className="font-normal">
                  {day.date
                    .toLocaleDateString("fr-FR", optionsWeekDay)
                    .slice(0, -1)}
                </p>
                <p className="font-bold">
                  {day.date
                    .toLocaleDateString("fr-FR", optionsDate)
                    .slice(0, -1)}
                </p>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

CalendarHeader.propTypes = {
  days: PropTypes.array,
};

export default CalendarHeader;
