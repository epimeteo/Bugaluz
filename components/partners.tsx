import { SectionHeading } from "@/components/section-heading"

export default function Partners() {
  return (
    <section id="partners" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Alianzas</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-6 h-48 w-full flex items-center justify-center">
              <img
                src="/partner-diocesis-buga.jpeg"
                alt="Diócesis de Buga"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg text-gray-600">
              BUGALUZ se cimenta en una alianza con la parroquia que regenta la catedral, según la cual autorizan el uso
              de la misma el 26 de julio.
            </p>
            <p className="mb-6 text-lg text-gray-600">
              Los gremios, la cámara de comercio y la municipalidad local siempre estarán invitados a vincularse y
              aportar desde sus potencialidades.
            </p>
            <p className="text-lg text-gray-600">
              BUGALUZ busca establecer alianzas con gremios y empresas del sector energético y tecnológico solar, que
              compartan su visión de innovación y sostenibilidad en calidad de patrocinadores únicos, para proyectar el
              evento al largo plazo con un hecho que tiene un story telling poderoso para atraer la atención mediática
              hacia los intereses del sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
