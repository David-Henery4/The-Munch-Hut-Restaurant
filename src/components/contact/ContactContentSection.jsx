import { ContactDetails, ContactText } from "./content-comps"

const ContactContentSection = () => {
  return (
    <section className="w-full col-start-2 col-end-12 py-20 max-w-[1160px] mx-auto smTab:py-28 smDesk:py-32">
      <ContactText/>
      <ContactDetails/>
    </section>
  )
}

export default ContactContentSection