"use client"

import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"

export default function Partners() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="partners" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-orange-200 opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-orange-200 opacity-20 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll animation="fade-in">
          <SectionHeading>Alianzas</SectionHeading>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay={200}>
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Alianza Institucional Fundamental</h3>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-48 h-48 relative transform transition-all duration-500 hover:scale-105">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Partner%20Diocesis%20de%20Buga-TUUSUIor2zJKWk7M1FEFHKWHalfXeL.jpeg"
                    alt="Diócesis de Buga"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <p className="text-gray-700">
                  BUGALUZ se cimenta en una alianza entre el gestor y la parroquia de San Pedro que regenta la catedral,
                  la cual otorga el permiso para realizar el evento principal PATH OF LIFE.
                </p>
                <p className="text-gray-700">
                  Los gremios, la cámara de comercio y la municipalidad local siempre estarán invitados a vincularse y
                  aportar desde sus potencialidades. El gestor garantiza su capacidad de coordinar la
                  inter-institucionalidad que se requiera a nivel local, regional y nacional.
                </p>
                <p className="text-gray-700">
                  Actualmente buscamos la alianza con un gremio afín al concepto, que comparta la visión y el potencial
                  de este evento único, y que haga de BUGALUZ su cita anual de referencia.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={600} className="mt-16">
          <div className="bg-orange-50 p-8 rounded-lg border border-orange-100 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">¿Quieres ser parte de BUGALUZ?</h3>
              <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
                Invitamos a empresas e instituciones interesadas en la energía renovable y la cultura a unirse a nuestra
                iniciativa y ser parte de este evento único.
              </p>
              <div className="flex justify-center">
                <button
                  className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={scrollToContact}
                >
                  Conviértete en aliado
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
