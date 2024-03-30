

const FormInput = ({label, id, name, value, isMessage = false}) => {

  //
  if (isMessage){
    return (
      <div className="w-full">
        <label htmlFor={id} className="">{label}</label>
        <textarea
          name={name}
          id={id}
          className="resize-none w-full h-48 p-3 mt-2 rounded-md bg-black/0 outline-none border border-white/50"
        ></textarea>
      </div>
    );
  }
  return (
    <div className="w-full">
      <label htmlFor={id} className="">
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