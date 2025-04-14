import { Card, CardContent } from "@/components/ui/card"

export function Speakers() {
  // Sample speakers/performers data
  const speakers = [
    {
      name: "Maria Sanchez",
      role: "Traditional Dance Performer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Award-winning performer specializing in traditional Buga dances with over 15 years of experience.",
    },
    {
      name: "Carlos Rodriguez",
      role: "Master Drummer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Renowned percussionist who has performed at cultural festivals worldwide, preserving Buga's rhythmic traditions.",
    },
    {
      name: "Elena Torres",
      role: "Cultural Historian",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Author and historian dedicated to documenting and preserving the rich cultural heritage of Buga.",
    },
    {
      name: "Miguel Hernandez",
      role: "Master Craftsman",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Fifth-generation artisan specializing in traditional mask making and wood carving techniques.",
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {speakers.map((speaker, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="aspect-square overflow-hidden">
            <img src={speaker.image || "/placeholder.svg"} alt={speaker.name} className="w-full h-full object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">{speaker.name}</h3>
            <p className="text-sm text-primary mb-2">{speaker.role}</p>
            <p className="text-sm text-muted-foreground">{speaker.bio}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
