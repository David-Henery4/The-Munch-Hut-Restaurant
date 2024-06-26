import DatePicker from "react-datepicker";
import { CalendarIcon } from "../../../../../../public/assets";
import "react-datepicker/dist/react-datepicker.css";

const FormDatePicker = ({
  setStartDate,
  startDate,
  isError = null,
  name,
  id,
  label,
}) => {
  //
  return (
    <div className="w-full">
      <label htmlFor={name}>{label}</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        name={name}
        id={id}
        className="w-full bg-black/0 outline-none flex-1"
        toggleCalendarOnIconClick
        showIcon
        closeOnScroll={true}
        icon={<CalendarIcon />}
        minDate={new Date()}
        wrapperClassName="w-full"
        dateFormat="dd-MM-yyyy"
      />
      {isError.isError && (
        <p className="text-sm text-red mt-2">{`${isError?.errorMsg[0]}*`}</p>
      )}
    </div>
  );
};

export default FormDatePicker;
