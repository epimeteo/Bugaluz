export function Gallery() {
  // Sample gallery images
  const images = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Traditional Dance Performance" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Cultural Parade" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Artisan Crafts" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Food Festival" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Music Performance" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Traditional Costumes" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
