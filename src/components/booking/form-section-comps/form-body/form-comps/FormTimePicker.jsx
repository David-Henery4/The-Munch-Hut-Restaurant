import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const FormTimePicker = ({
  isError = null,
  setStartTime,
  startTime,
  name,
  id,
  label,
}) => {
  // NEED TO SET MIN & MAX TIMES FOR OPENING TIMES
  //
  return (
    <div className="w-full">
      <label htmlFor={name}>{label}</label>
      <DatePicker
        selected={startTime}
        onChange={(date) => setStartTime(date)}
        name={name}
        id={id}
        className="w-full bg-black/0 outline-none"
        closeOnScroll={true}
        wrapperClassName="w-full"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        timeFormat="HH:mm:ss"
        dateFormat="HH:mm:ss"
      />
      {isError.isError && (
        <p className="text-sm text-red mt-2">{`${isError?.errorMsg[0]}*`}</p>
      )}
    </div>
  );
};

export default FormTimePicker;
