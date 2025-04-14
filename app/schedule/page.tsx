"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SchedulePage() {
  const [filter, setFilter] = useState<string | null>(null)

  // Sample schedule data
  const scheduleData = {
    day1: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "Opening Ceremony",
        description: "Official opening of the Buga Cultural Festival with traditional rituals and speeches.",
        location: "Main Stage",
        category: "ceremony",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Traditional Dance Performance",
        description: "Showcase of Buga's traditional dances performed by local dance troupes.",
        location: "Performance Arena",
        category: "performance",
      },
      {
        time: "01:00 PM - 02:30 PM",
        title: "Culinary Workshop",
        description: "Learn how to prepare traditional Buga dishes with local chefs.",
        location: "Food Pavilion",
        category: "workshop",
      },
      {
        time: "03:00 PM - 04:30 PM",
        title: "Storytelling Session",
        description: "Elders share traditional stories and legends of Buga.",
        location: "Heritage Center",
        category: "cultural",
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "Music Concert",
        description: "Live performances featuring traditional and contemporary music.",
        location: "Main Stage",
        category: "performance",
      },
    ],
    day2: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "Craft Workshop",
        description: "Learn traditional crafting techniques from master artisans.",
        location: "Artisan Village",
        category: "workshop",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Cultural Parade",
        description: "A colorful parade showcasing the diverse cultural groups of Buga.",
        location: "City Center",
        category: "cultural",
      },
      {
        time: "01:00 PM - 02:30 PM",
        title: "Traditional Games",
        description: "Participate in and learn about traditional games played in Buga.",
        location: "Festival Grounds",
        category: "activity",
      },
      {
        time: "03:00 PM - 04:30 PM",
        title: "Historical Exhibition",
        description: "Guided tour of historical artifacts and photographs of Buga.",
        location: "Heritage Center",
        category: "exhibition",
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "Dance Workshop",
        description: "Learn the basic steps of traditional Buga dances.",
        location: "Performance Arena",
        category: "workshop",
      },
    ],
    day3: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "Traditional Medicine Workshop",
        description: "Learn about herbal remedies and traditional healing practices.",
        location: "Wellness Pavilion",
        category: "workshop",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Mask Making Demonstration",
        description: "Watch master craftsmen create traditional ceremonial masks.",
        location: "Artisan Village",
        category: "demonstration",
      },
      {
        time: "01:00 PM - 02:30 PM",
        title: "Food Festival",
        description: "Sample a variety of traditional dishes from different regions of Buga.",
        location: "Food Pavilion",
        category: "food",
      },
      {
        time: "03:00 PM - 04:30 PM",
        title: "Poetry and Literature",
        description: "Readings and performances of traditional and contemporary Buga literature.",
        location: "Heritage Center",
        category: "performance",
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "Closing Ceremony",
        description: "Official closing of the festival with special performances and fireworks.",
        location: "Main Stage",
        category: "ceremony",
      },
    ],
    day4: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "Children's Cultural Workshop",
        description: "Interactive activities for children to learn about Buga's cultural heritage.",
        location: "Children's Area",
        category: "workshop",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Traditional Instrument Showcase",
        description: "Exhibition and demonstrations of traditional musical instruments from the region.",
        location: "Music Pavilion",
        category: "exhibition",
      },
      {
        time: "01:00 PM - 02:30 PM",
        title: "Cultural Fashion Show",
        description: "Showcase of traditional and contemporary clothing inspired by Buga's heritage.",
        location: "Main Stage",
        category: "performance",
      },
      {
        time: "03:00 PM - 04:30 PM",
        title: "Artisan Demonstrations",
        description: "Live demonstrations of traditional crafting techniques by master artisans.",
        location: "Artisan Village",
        category: "demonstration",
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "Community Dance",
        description: "Join in a community dance celebration with traditional music and instruction.",
        location: "Festival Grounds",
        category: "activity",
      },
    ],
    day5: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "Cultural Exchange Forum",
        description: "Discussion panel on preserving cultural heritage in the modern world.",
        location: "Conference Center",
        category: "discussion",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Traditional Weaving Workshop",
        description: "Learn the art of traditional textile weaving from expert craftspeople.",
        location: "Artisan Village",
        category: "workshop",
      },
      {
        time: "01:00 PM - 02:30 PM",
        title: "Regional Cuisine Competition",
        description: "Local chefs compete to create the best traditional dishes.",
        location: "Food Pavilion",
        category: "food",
      },
      {
        time: "03:00 PM - 04:30 PM",
        title: "Folk Music Workshop",
        description: "Learn to play traditional folk music instruments with expert musicians.",
        location: "Music Pavilion",
        category: "workshop",
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "Cultural Film Screening",
        description: "Screening of documentaries about Buga's cultural heritage.",
        location: "Heritage Center",
        category: "cultural",
      },
    ],
    day6: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "Traditional Healing Practices",
        description: "Demonstrations and discussions of traditional healing methods.",
        location: "Wellness Pavilion",
        category: "demonstration",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Youth Cultural Showcase",
        description: "Young performers present their interpretations of traditional arts.",
        location: "Performance Arena",
        category: "performance",
      },
      {
        time: "01:00 PM - 02:30 PM",
        title: "Community Feast",
        description: "A shared meal featuring traditional dishes prepared by community members.",
        location: "Food Pavilion",
        category: "food",
      },
      {
        time: "03:00 PM - 04:30 PM",
        title: "Cultural Photography Exhibition",
        description: "Exhibition of photographs documenting Buga's cultural heritage.",
        location: "Gallery Space",
        category: "exhibition",
      },
      {
        time: "05:00 PM - 08:00 PM",
        title: "Grand Finale Celebration",
        description: "Final celebration with performances, fireworks, and community participation.",
        location: "Main Stage",
        category: "ceremony",
      },
    ],
  }

  const categories = [
    { value: "performance", label: "Performances" },
    { value: "workshop", label: "Workshops" },
    { value: "cultural", label: "Cultural Events" },
    { value: "food", label: "Food Events" },
    { value: "exhibition", label: "Exhibitions" },
    { value: "ceremony", label: "Ceremonies" },
    { value: "activity", label: "Activities" },
    { value: "demonstration", label: "Demonstrations" },
    { value: "discussion", label: "Discussions" },
  ]

  const getCategoryColor = (category: string) => {
    const categoryMap: Record<string, string> = {
      performance: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      workshop: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      cultural: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      food: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      exhibition: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      ceremony: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      activity: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
      demonstration: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
      discussion: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    }

    return categoryMap[category] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }

  const filterEvents = (events: any[]) => {
    if (!filter) return events
    return events.filter((event) => event.category === filter)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Festival Schedule</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter by Event Type</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant={filter === null ? "default" : "outline"} size="sm" onClick={() => setFilter(null)}>
            All Events
          </Button>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
          <TabsTrigger value="day1">Day 1</TabsTrigger>
          <TabsTrigger value="day2">Day 2</TabsTrigger>
          <TabsTrigger value="day3">Day 3</TabsTrigger>
          <TabsTrigger value="day4">Day 4</TabsTrigger>
          <TabsTrigger value="day5">Day 5</TabsTrigger>
          <TabsTrigger value="day6">Day 6</TabsTrigger>
        </TabsList>

        {Object.entries(scheduleData).map(([day, events], dayIndex) => (
          <TabsContent key={day} value={day} className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">June {15 + dayIndex}, 2025</h2>
            </div>

            {filterEvents(events).length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  No events match your filter. Please select a different category.
                </p>
              </div>
            ) : (
              filterEvents(events).map((event, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {event.title}
                          <Badge className={`ml-2 ${getCategoryColor(event.category)}`}>
                            {categories.find((c) => c.value === event.category)?.label || event.category}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                        <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                        {event.time}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{event.description}</p>
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm">
                        Add to My Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Schedule Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Festival Hours</h3>
            <p className="text-muted-foreground mb-4">
              The festival grounds are open daily from 8:00 AM to 10:00 PM during the event. Some special events may
              extend beyond these hours.
            </p>

            <h3 className="text-lg font-medium mb-2">Venue Information</h3>
            <p className="text-muted-foreground">
              All festival activities take place in and around the Buga City Center. Maps and directional signs will be
              available throughout the festival area.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Accessibility</h3>
            <p className="text-muted-foreground mb-4">
              All main venues are wheelchair accessible. Assistive listening devices are available at the information
              booth for performances.
            </p>

            <h3 className="text-lg font-medium mb-2">Weather Policy</h3>
            <p className="text-muted-foreground">
              In case of inclement weather, outdoor events may be relocated or rescheduled. Updates will be posted at
              information booths and on our website.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Download the Festival App</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Get the most out of your festival experience with our mobile app. Create your own schedule, receive event
          updates, and navigate the festival grounds with ease.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M3 11h18" />
              <path d="M18 16.5V18" />
              <path d="M18 22v-1.5" />
              <path d="M22 18h-1.5" />
              <path d="M16.5 18H15" />
            </svg>
            Download for iOS
          </Button>
          <Button className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" />
              <path d="M8 16l2-2 2 2 4-4" />
              <path d="M16 10h-4" />
              <path d="M16 14h-4" />
            </svg>
            Download for Android
          </Button>
        </div>
      </div>
    </div>
  )
}
