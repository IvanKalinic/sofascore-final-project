import React,{memo} from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useDate}  from "../../context/DateContext";
import "./index.scss";

function Datepicker() {
  const { date, handleDateChange } = useDate();
  return (
    <div className="container">
      <DatePickerComponent
        placeholder="Enter or pick date"
        value={date}
        onChange={handleDateChange}
      ></DatePickerComponent>
    </div>
  );
}

export default memo(Datepicker);
