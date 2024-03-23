import { BookLink } from ".."

const CtaText = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-8">
      <h3 className="text-5xl font-pompiere lgMob:text-6xl lgLap:text-7xl smDesk:text-8xl">Ready to come dine with us?</h3>
      <BookLink />
    </div>
  );
}

export default CtaText