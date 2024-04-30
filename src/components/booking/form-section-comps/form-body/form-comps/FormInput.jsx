

const FormInput = ({label, id, name, value, isMessage = false, className = "", isError = null}) => {
  console.log(isError)
  //
  if (isMessage){
    return (
      <div className="w-full XtraSmTab:flex XtraSmTab:flex-col XtraSmTab:items-start XtraSmTab:row-span-2 XtraSmTab:col-start-2 XtraSmTab:col-end-3">
        <label htmlFor={id}>
          {label}
        </label>
        <textarea
          name={name}
          id={id}
          className="resize-none w-full h-48 p-3 mt-2 rounded-md bg-black/0 outline-none border border-white/50 XtraSmTab:flex-[1]"
        ></textarea>
      </div>
    );
  }
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className={`${isError && isError.isError && "text-red"}`}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        className="w-full p-3 mt-2 rounded-md bg-black/0 outline-none border border-white/50"
        type="text"
      />
    </div>
  );
}

export default FormInput