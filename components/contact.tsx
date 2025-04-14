"use client"

import type React from "react"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"
import {
  submitContactForm,
  submitCompanyForm,
  submitSponsorForm,
  submitVolunteerForm,
  subscribeToNewsletter,
} from "@/lib/actions"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Contact() {
  const [activeTab, setActiveTab] = useState("general")
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    role: "",
    interest: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    success?: boolean
    message?: string
    errors?: Array<{ field: string; message: string }>
  } | null>(null)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterResponse, setNewsletterResponse] = useState<{
    success?: boolean
    message?: string
    errors?: Array<{ field: string; message: string }>
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear field-specific errors when the user starts typing in that field
    if (formResponse?.errors?.some((error) => error.field === name)) {
      setFormResponse({
        ...formResponse,
        errors: formResponse.errors.filter((error) => error.field !== name),
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear field-specific errors when the user changes a select value
    if (formResponse?.errors?.some((error) => error.field === name)) {
      setFormResponse({
        ...formResponse,
        errors: formResponse.errors.filter((error) => error.field !== name),
      })
    }
  }

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      message: "",
      company: "",
      role: "",
      interest: "",
    })
  }

  // Helper function to check if a field has an error
  const hasFieldError = (fieldName: string) => {
    return formResponse?.errors?.some((error) => error.field === fieldName) || false
  }

  // Helper function to get the error message for a field
  const getFieldErrorMessage = (fieldName: string) => {
    return formResponse?.errors?.find((error) => error.field === fieldName)?.message || ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormResponse(null)

    const formData = new FormData()
    Object.entries(formState).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })

    let response

    switch (activeTab) {
      case "general":
        response = await submitContactForm(formData)
        break
      case "company":
        response = await submitCompanyForm(formData)
        break
      case "sponsor":
        response = await submitSponsorForm(formData)
        break
      case "volunteer":
        response = await submitVolunteerForm(formData)
        break
      default:
        response = { success: false, message: "Tipo de formulario no válido" }
    }

    setFormResponse(response)
    setIsSubmitting(false)

    if (response.success) {
      resetForm()
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterResponse(null)

    const formData = new FormData()
    formData.append("email", newsletterEmail)

    const response = await subscribeToNewsletter(formData)
    setNewsletterResponse(response)

    if (response.success) {
      setNewsletterEmail("")
    }
  }

  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading light>Contacto</SectionHeading>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-orange-400">Conéctate con BUGALUZ</h3>
            <p className="mb-8 text-gray-300">
              Estamos aquí para responder tus preguntas sobre el festival, oportunidades de participación, patrocinio o
              cualquier otra consulta que puedas tener.
            </p>

            <div className="mb-8 space-y-6">
              <div>
                <h4 className="mb-2 text-lg font-semibold">Dirección</h4>
                <p className="text-gray-300">Catedral de San Pedro, Centro Histórico</p>
                <p className="text-gray-300">Buga, Valle del Cauca, Colombia</p>
              </div>

              <div>
                <h4 className="mb-2 text-lg font-semibold">Contacto</h4>
                <p className="text-gray-300">info@bugaluz.co</p>
                <p className="text-gray-300">+57 (2) 123 4567</p>
              </div>

              <div>
                <h4 className="mb-2 text-lg font-semibold">Síguenos</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/bugaluz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-800 p-2 text-white transition-colors hover:bg-orange-500"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com/bugaluz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-800 p-2 text-white transition-colors hover:bg-orange-500"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com/bugaluz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-800 p-2 text-white transition-colors hover:bg-orange-500"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/bugaluz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-800 p-2 text-white transition-colors hover:bg-orange-500"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h4 className="mb-4 text-lg font-semibold">Suscríbete a nuestro boletín</h4>
              <p className="mb-4 text-gray-300">
                Recibe las últimas noticias y actualizaciones sobre BUGALUZ directamente en tu bandeja de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleNewsletterSubmit}>
                <div className="w-full">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className={`bg-gray-800 border-gray-700 text-white ${
                      newsletterResponse?.errors?.some((e) => e.field === "email") ? "border-red-500" : ""
                    }`}
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value)
                      if (newsletterResponse?.errors) setNewsletterResponse(null)
                    }}
                    required
                  />
                  {newsletterResponse?.errors?.some((e) => e.field === "email") && (
                    <p className="text-sm text-red-400 mt-1">
                      {newsletterResponse.errors.find((e) => e.field === "email")?.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                  Suscribirse
                </Button>
              </form>

              {newsletterResponse && !newsletterResponse.errors && (
                <Alert
                  className={`mt-4 ${newsletterResponse.success ? "bg-green-900/20 text-green-400" : "bg-red-900/20 text-red-400"}`}
                >
                  <AlertDescription>{newsletterResponse.message}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          <div>
            <Tabs
              defaultValue="general"
              onValueChange={(value) => {
                setActiveTab(value)
                setFormResponse(null)
              }}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 bg-gray-800">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="company">Empresas</TabsTrigger>
                <TabsTrigger value="sponsor">Patrocinio</TabsTrigger>
                <TabsTrigger value="volunteer">Voluntarios</TabsTrigger>
              </TabsList>

              {formResponse && !formResponse.errors && (
                <Alert
                  className={`mt-4 ${formResponse.success ? "bg-green-900/20 text-green-400" : "bg-red-900/20 text-red-400"}`}
                >
                  <AlertDescription>{formResponse.message}</AlertDescription>
                </Alert>
              )}

              <TabsContent value="general" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`bg-gray-800 border-gray-700 text-white ${
                        hasFieldError("name") ? "border-red-500" : ""
                      }`}
                      required
                    />
                    {hasFieldError("name") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("name")}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`bg-gray-800 border-gray-700 text-white ${
                        hasFieldError("email") ? "border-red-500" : ""
                      }`}
                      required
                    />
                    {hasFieldError("email") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("email")}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Mensaje <span className="text-xs text-gray-400">(mínimo 10 caracteres)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={`bg-gray-800 border-gray-700 text-white ${
                        hasFieldError("message") ? "border-red-500" : ""
                      }`}
                      minLength={10}
                      required
                    />
                    {hasFieldError("message") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("message")}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="company" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Nombre
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("name") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("name") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("name")}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("email") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("email") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("email")}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("company") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("company") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("company")}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-white">
                        Cargo
                      </Label>
                      <Input
                        id="role"
                        name="role"
                        value={formState.role}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("role") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("role") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("role")}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-white">
                      Interés principal
                    </Label>
                    <Select value={formState.interest} onValueChange={(value) => handleSelectChange("interest", value)}>
                      <SelectTrigger
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("interest") ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="exhibitor">Participar como expositor</SelectItem>
                        <SelectItem value="speaker">Participar como ponente</SelectItem>
                        <SelectItem value="sponsor">Patrocinar el evento</SelectItem>
                        <SelectItem value="attendee">Asistir al evento</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    {hasFieldError("interest") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("interest")}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Mensaje <span className="text-xs text-gray-400">(mínimo 10 caracteres)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`bg-gray-800 border-gray-700 text-white ${
                        hasFieldError("message") ? "border-red-500" : ""
                      }`}
                      minLength={10}
                      required
                    />
                    {hasFieldError("message") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("message")}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="sponsor" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Nombre
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("name") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("name") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("name")}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("email") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("email") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("email")}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("company") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("company") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("company")}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-white">
                        Cargo
                      </Label>
                      <Input
                        id="role"
                        name="role"
                        value={formState.role}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("role") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("role") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("role")}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-white">
                      Nivel de patrocinio
                    </Label>
                    <Select value={formState.interest} onValueChange={(value) => handleSelectChange("interest", value)}>
                      <SelectTrigger
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("interest") ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="platinum">Patrocinador Platino</SelectItem>
                        <SelectItem value="gold">Patrocinador Oro</SelectItem>
                        <SelectItem value="silver">Patrocinador Plata</SelectItem>
                        <SelectItem value="ally">Aliado Estratégico</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    {hasFieldError("interest") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("interest")}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Mensaje <span className="text-xs text-gray-400">(mínimo 10 caracteres)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`bg-gray-800 border-gray-700 text-white ${
                        hasFieldError("message") ? "border-red-500" : ""
                      }`}
                      minLength={10}
                      required
                    />
                    {hasFieldError("message") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("message")}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar solicitud de patrocinio"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="volunteer" className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Nombre
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("name") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("name") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("name")}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("email") ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {hasFieldError("email") && (
                        <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("email")}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-white">
                      Área de interés
                    </Label>
                    <Select value={formState.interest} onValueChange={(value) => handleSelectChange("interest", value)}>
                      <SelectTrigger
                        className={`bg-gray-800 border-gray-700 text-white ${
                          hasFieldError("interest") ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="logistics">Logística y organización</SelectItem>
                        <SelectItem value="guides">Guías y atención al público</SelectItem>
                        <SelectItem value="technical">Soporte técnico</SelectItem>
                        <SelectItem value="content">Creación de contenido</SelectItem>
                        <SelectItem value="any">Cualquier área necesaria</SelectItem>
                      </SelectContent>
                    </Select>
                    {hasFieldError("interest") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("interest")}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      ¿Por qué quieres ser voluntario?{" "}
                      <span className="text-xs text-gray-400">(mínimo 10 caracteres)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`bg-gray-800 border-gray-700 text-white ${
                        hasFieldError("message") ? "border-red-500" : ""
                      }`}
                      minLength={10}
                      required
                    />
                    {hasFieldError("message") && (
                      <p className="text-sm text-red-400 mt-1">{getFieldErrorMessage("message")}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar solicitud de voluntariado"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
