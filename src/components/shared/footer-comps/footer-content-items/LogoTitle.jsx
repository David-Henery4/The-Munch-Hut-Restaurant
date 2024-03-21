import { SecondaryHeader } from "../.."
import { LogoIcon } from "../../../../../public/assets"

const LogoTitle = () => {
  return (
    <div className="grid place-items-center gap-4">
      <LogoIcon />
      <SecondaryHeader>The Munch Hut</SecondaryHeader>
    </div>
  );
}

export default LogoTitle