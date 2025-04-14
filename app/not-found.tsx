import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-6 w-40 md:w-56 mx-auto">
          <img src="/bugaluz-logo.svg" alt="BUGALUZ" className="w-full" />
        </div>

        <h1 className="mb-4 text-4xl font-bold md:text-6xl">404</h1>
        <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Página no encontrada</h2>

        <p className="mb-8 mx-auto max-w-md text-gray-300">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <Button asChild className="bg-orange-500 hover:bg-orange-600">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  )
}
