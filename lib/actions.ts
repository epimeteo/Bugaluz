"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient } from "./supabase"
import { z } from "zod"

// Validation schemas
const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("Correo electrónico inválido"),
  message: z.string().min(10, "El mensaje es demasiado corto"),
})

const companyFormSchema = contactFormSchema.extend({
  company: z.string().min(2, "El nombre de la empresa es demasiado corto"),
  role: z.string().min(2, "El cargo es demasiado corto"),
  interest: z.string(),
})

const sponsorFormSchema = companyFormSchema.extend({
  interest: z.string().optional(),
  sponsorship_level: z.string(),
})

const volunteerFormSchema = contactFormSchema.extend({
  area_of_interest: z.string(),
})

const newsletterSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
})

// Form submission actions
export async function submitContactForm(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    // Validate data
    const validatedData = contactFormSchema.parse(data)

    // Insert into database
    const { error } = await supabase.from("contact_submissions").insert([validatedData])

    if (error) throw new Error(error.message)

    // Revalidate the path to update any cached data
    revalidatePath("/")

    return { success: true, message: "Mensaje enviado correctamente" }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Error de validación. Por favor, revisa los campos marcados.",
        errors: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
      }
    }
    return { success: false, message: "Error al enviar el formulario. Por favor, inténtalo de nuevo." }
  }
}

export async function submitCompanyForm(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as string,
      interest: formData.get("interest") as string,
      message: formData.get("message") as string,
    }

    // Validate data
    const validatedData = companyFormSchema.parse(data)

    // Insert into database
    const { error } = await supabase.from("company_submissions").insert([validatedData])

    if (error) throw new Error(error.message)

    // Revalidate the path to update any cached data
    revalidatePath("/")

    return { success: true, message: "Solicitud enviada correctamente" }
  } catch (error) {
    console.error("Error submitting company form:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Error de validación. Por favor, revisa los campos marcados.",
        errors: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
      }
    }
    return { success: false, message: "Error al enviar el formulario. Por favor, inténtalo de nuevo." }
  }
}

export async function submitSponsorForm(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as string,
      sponsorship_level: formData.get("interest") as string, // Using 'interest' field for sponsorship_level
      message: formData.get("message") as string,
    }

    // Validate data
    const validatedData = sponsorFormSchema.parse(data)

    // Insert into database
    const { error } = await supabase.from("sponsor_submissions").insert([validatedData])

    if (error) throw new Error(error.message)

    // Revalidate the path to update any cached data
    revalidatePath("/")

    return { success: true, message: "Solicitud de patrocinio enviada correctamente" }
  } catch (error) {
    console.error("Error submitting sponsor form:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Error de validación. Por favor, revisa los campos marcados.",
        errors: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
      }
    }
    return { success: false, message: "Error al enviar el formulario. Por favor, inténtalo de nuevo." }
  }
}

export async function submitVolunteerForm(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      area_of_interest: formData.get("interest") as string, // Using 'interest' field for area_of_interest
      message: formData.get("message") as string,
    }

    // Validate data
    const validatedData = volunteerFormSchema.parse(data)

    // Insert into database
    const { error } = await supabase.from("volunteer_submissions").insert([validatedData])

    if (error) throw new Error(error.message)

    // Revalidate the path to update any cached data
    revalidatePath("/")

    return { success: true, message: "Solicitud de voluntariado enviada correctamente" }
  } catch (error) {
    console.error("Error submitting volunteer form:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Error de validación. Por favor, revisa los campos marcados.",
        errors: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
      }
    }
    return { success: false, message: "Error al enviar el formulario. Por favor, inténtalo de nuevo." }
  }
}

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const data = {
      email: formData.get("email") as string,
    }

    // Validate data
    const validatedData = newsletterSchema.parse(data)

    // Insert into database
    const { error } = await supabase.from("newsletter_subscriptions").insert([validatedData])

    if (error) {
      // Handle unique constraint violation
      if (error.code === "23505") {
        return { success: true, message: "Ya estás suscrito a nuestro boletín" }
      }
      throw new Error(error.message)
    }

    // Revalidate the path to update any cached data
    revalidatePath("/")

    return { success: true, message: "¡Gracias por suscribirte a nuestro boletín!" }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Error de validación. Por favor, revisa el correo electrónico.",
        errors: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
      }
    }
    return { success: false, message: "Error al suscribirte. Por favor, inténtalo de nuevo." }
  }
}
