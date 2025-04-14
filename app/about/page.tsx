import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About The Buga Cultural Festival</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-muted-foreground mb-4">
            The Buga Cultural Festival was first established in 1975 as a small community gathering to celebrate the
            rich cultural heritage of the region. What began as a one-day event with local performers has grown into a
            week-long international festival that attracts visitors from around the world.
          </p>
          <p className="text-muted-foreground mb-4">
            For over five decades, the festival has been dedicated to preserving and promoting the traditional arts,
            music, dance, cuisine, and crafts that make Buga's cultural identity unique. Each year, the festival evolves
            while staying true to its roots and commitment to authentic cultural expression.
          </p>
          <p className="text-muted-foreground">
            Today, the Buga Cultural Festival is recognized as one of the most important cultural events in the region,
            serving as a platform for cultural exchange, education, and celebration.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Festival in the 1970s"
            className="rounded-lg object-cover h-full"
          />
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Festival in the 1990s"
            className="rounded-lg object-cover h-full mt-8"
          />
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Festival in the 2000s"
            className="rounded-lg object-cover h-full"
          />
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Festival Today"
            className="rounded-lg object-cover h-full mt-8"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 mb-6">
          <p className="italic text-lg">
            "To preserve, celebrate, and share the rich cultural heritage of Buga through authentic artistic
            expressions, fostering cultural understanding and pride among generations."
          </p>
        </div>
        <p className="text-muted-foreground">The Buga Cultural Festival is committed to:</p>
        <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
          <li>Preserving traditional arts, crafts, music, dance, and culinary practices</li>
          <li>Providing a platform for cultural exchange between different communities</li>
          <li>Educating younger generations about their cultural heritage</li>
          <li>Supporting local artisans and performers</li>
          <li>Promoting cultural tourism that benefits the local economy</li>
          <li>Documenting and archiving cultural practices for future generations</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Festival Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Traditional Performances",
              description:
                "Experience authentic dances, music, and theatrical performances that showcase Buga's cultural heritage.",
            },
            {
              title: "Artisan Market",
              description:
                "Browse and purchase handcrafted items created by local artisans using traditional techniques passed down through generations.",
            },
            {
              title: "Culinary Experiences",
              description:
                "Taste authentic local cuisine and participate in cooking demonstrations to learn traditional recipes and cooking methods.",
            },
            {
              title: "Cultural Workshops",
              description:
                "Learn traditional crafts, dance steps, musical instruments, and other cultural practices through hands-on workshops.",
            },
            {
              title: "Historical Exhibitions",
              description:
                "Explore displays of historical artifacts, photographs, and documents that tell the story of Buga's rich cultural history.",
            },
            {
              title: "Community Participation",
              description:
                "Join in community activities where locals and visitors come together to celebrate and share cultural experiences.",
            },
          ].map((highlight, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Organizing Committee</h2>
        <p className="text-muted-foreground mb-6">
          The Buga Cultural Festival is organized by a dedicated committee of cultural leaders, community members, and
          volunteers who work year-round to ensure the festival's success. The committee includes representatives from
          various cultural groups, local government, educational institutions, and business sectors.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Elena Morales",
              role: "Festival Director",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "Carlos Vega",
              role: "Cultural Program Coordinator",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "Maria Gonzalez",
              role: "Community Outreach",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "Juan Ramirez",
              role: "Logistics Manager",
              image: "/placeholder.svg?height=200&width=200",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Us This Year</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Be part of this extraordinary celebration of culture, tradition, and community. The Buga Cultural Festival
          welcomes visitors of all backgrounds to experience the rich heritage of our region.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/schedule">View Schedule</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
