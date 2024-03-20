import { MenuInfoCard, Slider } from "./menu-info-comps"

const MenuInfoSection = () => {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-mob">
      <MenuInfoCard/>
      <Slider/>
    </section>
  )
}

export default MenuInfoSection