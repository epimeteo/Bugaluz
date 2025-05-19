export default function LoadingFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 mb-8">
          <img src="/bugaluz-logo.svg" alt="BUGALUZ" className="w-full animate-pulse" />
        </div>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  )
}
