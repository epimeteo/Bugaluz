import { SectionHeading } from "@/components/section-heading"

export default function Partners() {
  const partners = [
    {
      name: "Ministerio de Minas y Energía",
      logo: "/logos/minminas.svg",
      type: "Institucional",
    },
    {
      name: "Alcaldía de Buga",
      logo: "/logos/buga.svg",
      type: "Institucional",
    },
    {
      name: "EnerSol Colombia",
      logo: "/logos/enersol.svg",
      type: "Patrocinador Principal",
    },
    {
      name: "Universidad del Valle",
      logo: "/logos/univalle.svg",
      type: "Académico",
    },
    {
      name: "Fundación Energía Verde",
      logo: "/logos/energia-verde.svg",
      type: "Aliado Estratégico",
    },
  ]

  return (
    <section id="partners" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Aliados y Patrocinadores</SectionHeading>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          BUGALUZ es posible gracias al apoyo de organizaciones comprometidas con la innovación energética y el
          desarrollo cultural de Buga.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 h-24 w-full flex items-center justify-center">
                <img
                  src={partner.logo || "/placeholder.svg?height=96&width=96"}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-900">{partner.name}</h3>
              <p className="text-center text-sm text-gray-500">{partner.type}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-orange-50 p-6 border border-orange-100">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
            <div className="mb-6 md:mb-0 md:mr-6 md:w-1/3">
              <h3 className="text-xl font-bold text-gray-900">Conviértete en Patrocinador</h3>
            </div>
            <div className="md:w-2/3">
              <p className="mb-4 text-gray-600">
                Únete a nuestros aliados y patrocinadores para apoyar este evento único que combina cultura, ciencia y
                sostenibilidad. Como patrocinador de BUGALUZ, tu organización será reconocida como líder en innovación y
                compromiso con la transición energética.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Beneficios</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Visibilidad de marca en todos los materiales del evento</li>
                    <li>• Presencia en la feria de energía</li>
                    <li>• Participación en conferencias y paneles</li>
                    <li>• Acceso VIP a todos los eventos</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-semibold text-gray-900">Categorías</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Patrocinador Platino</li>
                    <li>• Patrocinador Oro</li>
                    <li>• Patrocinador Plata</li>
                    <li>• Aliado Estratégico</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-center md:text-left">
                <a
                  href="#contact"
                  className="inline-block rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                >
                  Solicitar información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
