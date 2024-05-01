import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { CalendarIcon } from "../../../../../../public/assets";
import "react-datepicker/dist/react-datepicker.css";

const FormDatePicker = ({ setStartDate, startDate }) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  //   <button className="example-custom-input" onClick={onClick} ref={ref}>
  //     {value}
  //   </button>
  // ));
  // ExampleCustomInput.displayName = "ExampleCustomInput";
  //
  return (
    <div className="w-full">
      <label htmlFor="datePicker">Available Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        name="datePicker"
        id="datePicker"
        className="w-full bg-black/0 outline-none flex-1"
        toggleCalendarOnIconClick
        showIcon
        closeOnScroll={true}
        icon={<CalendarIcon />}
        minDate={new Date()}
        wrapperClassName="w-full"
      />
    </div>
  );
};

export default FormDatePicker;
