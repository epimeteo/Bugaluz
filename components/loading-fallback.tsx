export default function LoadingFallback() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="mb-4 w-32">
          <img src="/bugaluz-logo-small.svg" alt="BUGALUZ" className="w-full" />
        </div>
        <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-800">
          <div className="h-full w-1/2 animate-pulse bg-orange-500"></div>
        </div>
        <p className="mt-4 text-white">Cargando experiencia...</p>
      </div>
    </div>
  )
}
