import { Button } from "../ui/Button";
import { IconLink } from "../ui/IconLink";
import { SectionBadge } from "../ui/SectionBadge";
import { SectionHeader } from "../ui/SectionHeader";

import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { FaRegMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function Contact() {
  return (
    <section id="contact" className="mx-4 md:mx-20 py-16 flex flex-col items-center  border border-border rounded-2xl mt-20 mb-20 bg-background-tertiary">
      <SectionBadge icon={<FaRegMessage />} text="Contato" />

      <SectionHeader 
        title={`Gostou do que viu? Vamos conversar.`}
        description="Estou em busca da minha primeira oportunidade como desenvolvedor front-end. Se você é recrutador ou tem um projeto em mente, adoraria trocar uma ideia."
        gapContainer="gap-3"
        maxWidthTitle="max-w-[60%]"
      />

      <div className="flex items-center gap-2 mt-8">
        <IconLink textLink="https://www.linkedin.com/in/renato-mendonca-granata/" target="_blank">
          <FaLinkedin />
        </IconLink>
        <IconLink textLink="https://github.com/RenatoGranata" target="_blank">
          <FaGithub />
        </IconLink>
        <IconLink textLink="mailto:renatomgdev@gmail.com">
          <MdEmail />
        </IconLink>
        <IconLink textLink="https://www.instagram.com/renato.dev_1371" target="_blank">
          <FaInstagram />
        </IconLink>
        <IconLink textLink="https://wa.me/5521995185229" target="_blank">
          <FaWhatsapp />
        </IconLink>
      </div>


    </section>
  )
}