import { MenuLink, BookLink } from "@/components/shared"

const HeaderCta = () => {
  return (
    <div className="flex flex-col mt-6 gap-2 z-10 lgMob:mt-8 XtraSmTab:gap-4 smTab:mt-10">
      <MenuLink />
      <BookLink />
    </div>
  );
}

export default HeaderCta