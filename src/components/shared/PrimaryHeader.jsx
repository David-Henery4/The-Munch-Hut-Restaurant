

const PrimaryHeader = ({children}) => {
  return (
    <h1 className="font-pompiere text-6xl lgMob:text-7xl XtraSmTab:text-8xl lgLap:text-9xl">
      {children}
    </h1>
  );
}

export default PrimaryHeader