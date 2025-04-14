"use client"

import { useState } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Sample gallery images by category
  const galleryImages = {
    performances: Array.from({ length: 8 }, (_, i) => ({
      src: `/placeholder.svg?height=400&width=600&text=Performance+${i + 1}`,
      alt: `Traditional Performance ${i + 1}`,
      year: "2024",
    })),
    crafts: Array.from({ length: 6 }, (_, i) => ({
      src: `/placeholder.svg?height=400&width=600&text=Craft+${i + 1}`,
      alt: `Traditional Craft ${i + 1}`,
      year: "2024",
    })),
    food: Array.from({ length: 6 }, (_, i) => ({
      src: `/placeholder.svg?height=400&width=600&text=Food+${i + 1}`,
      alt: `Traditional Food ${i + 1}`,
      year: "2024",
    })),
    people: Array.from({ length: 8 }, (_, i) => ({
      src: `/placeholder.svg?height=400&width=600&text=People+${i + 1}`,
      alt: `Festival Attendees ${i + 1}`,
      year: "2024",
    })),
    historical: Array.from({ length: 6 }, (_, i) => ({
      src: `/placeholder.svg?height=400&width=600&text=Historical+${i + 1}`,
      alt: `Historical Festival Moment ${i + 1}`,
      year: `${2000 + i}`,
    })),
  }

  const openLightbox = (src: string) => {
    setSelectedImage(src)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Festival Gallery</h1>

      <Tabs defaultValue="performances" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="performances">Performances</TabsTrigger>
          <TabsTrigger value="crafts">Crafts</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="historical">Historical</TabsTrigger>
        </TabsList>

        {Object.entries(galleryImages).map(([category, images]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => openLightbox(image.src)}
                >
                  <div className="relative">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <p className="text-sm font-medium">{image.alt}</p>
                      <p className="text-xs opacity-80">{image.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Share Your Festival Photos</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Did you attend a previous Buga Cultural Festival? We'd love to see and share your photos! Submit your festival
          memories to be featured in our community gallery.
        </p>
        <Button size="lg">Submit Your Photos</Button>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
