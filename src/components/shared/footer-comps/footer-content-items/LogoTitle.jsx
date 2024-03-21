import { SecondaryHeader } from "../.."
import { LogoIcon } from "../../../../../public/assets"

const LogoTitle = () => {
  return (
    <div className="grid place-items-center gap-4 smTab:col-start-4 smTab:col-end-10">
      
      <LogoIcon />
      <SecondaryHeader>The Munch Hut</SecondaryHeader>
    </div>
  );
}

export default LogoTitle