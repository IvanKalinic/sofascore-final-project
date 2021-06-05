import React, { memo } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useDate } from "../../context/DateContext";
import "./index.scss";
import { useTheme } from "../../context/ThemeContext";

const Datepicker = () => {
  const { date, handleDateChange } = useDate();
  const { checked } = useTheme();

  return (
    <div className={`datepicker-${checked}`}>
      <DatePickerComponent
        placeholder="Enter or pick date"
        value={date}
        onChange={handleDateChange}
      ></DatePickerComponent>
    </div>
  );
};

export default memo(Datepicker);
