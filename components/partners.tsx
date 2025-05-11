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
            <h3 className="mb-4 text-xl font-bold text-orange-600">Alianza Institucional Fundamental</h3>
            <p className="mb-6 text-lg text-gray-600">
              BUGALUZ se cimenta en una alianza entre el gestor y la parroquia de San Pedro que regenta la catedral, la
              cual otorga el permiso para realizar el evento principal PATH OF LIFE.
            </p>
            <p className="mb-6 text-lg text-gray-600">
              Los gremios, la cámara de comercio y la municipalidad local siempre estarán invitados a vincularse y
              aportar desde sus potencialidades. El gestor garantiza su capacidad de coordinar la
              inter-institucionalidad que se requiera a nivel local, regional y nacional.
            </p>
            <p className="text-lg text-gray-600">
              Actualmente buscamos la alianza con un gremio afín al concepto, que comparta la visión y el potencial de
              este evento único, y que haga de BUGALUZ su cita anual de referencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
