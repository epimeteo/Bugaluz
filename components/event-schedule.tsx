"use client"

import { useState } from "react"
import { Clock } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample schedule data
const scheduleData = {
  day1: [
    {
      time: "09:00 AM - 10:30 AM",
      title: "Opening Ceremony",
      description: "Official opening of the Buga Cultural Festival with traditional rituals and speeches.",
      location: "Main Stage",
    },
    {
      time: "11:00 AM - 12:30 PM",
      title: "Traditional Dance Performance",
      description: "Showcase of Buga's traditional dances performed by local dance troupes.",
      location: "Performance Arena",
    },
    {
      time: "01:00 PM - 02:30 PM",
      title: "Culinary Workshop",
      description: "Learn how to prepare traditional Buga dishes with local chefs.",
      location: "Food Pavilion",
    },
    {
      time: "03:00 PM - 04:30 PM",
      title: "Storytelling Session",
      description: "Elders share traditional stories and legends of Buga.",
      location: "Heritage Center",
    },
    {
      time: "05:00 PM - 07:00 PM",
      title: "Music Concert",
      description: "Live performances featuring traditional and contemporary music.",
      location: "Main Stage",
    },
  ],
  day2: [
    {
      time: "09:00 AM - 10:30 AM",
      title: "Craft Workshop",
      description: "Learn traditional crafting techniques from master artisans.",
      location: "Artisan Village",
    },
    {
      time: "11:00 AM - 12:30 PM",
      title: "Cultural Parade",
      description: "A colorful parade showcasing the diverse cultural groups of Buga.",
      location: "City Center",
    },
    {
      time: "01:00 PM - 02:30 PM",
      title: "Traditional Games",
      description: "Participate in and learn about traditional games played in Buga.",
      location: "Festival Grounds",
    },
    {
      time: "03:00 PM - 04:30 PM",
      title: "Historical Exhibition",
      description: "Guided tour of historical artifacts and photographs of Buga.",
      location: "Heritage Center",
    },
    {
      time: "05:00 PM - 07:00 PM",
      title: "Dance Workshop",
      description: "Learn the basic steps of traditional Buga dances.",
      location: "Performance Arena",
    },
  ],
  day3: [
    {
      time: "09:00 AM - 10:30 AM",
      title: "Traditional Medicine Workshop",
      description: "Learn about herbal remedies and traditional healing practices.",
      location: "Wellness Pavilion",
    },
    {
      time: "11:00 AM - 12:30 PM",
      title: "Mask Making Demonstration",
      description: "Watch master craftsmen create traditional ceremonial masks.",
      location: "Artisan Village",
    },
    {
      time: "01:00 PM - 02:30 PM",
      title: "Food Festival",
      description: "Sample a variety of traditional dishes from different regions of Buga.",
      location: "Food Pavilion",
    },
    {
      time: "03:00 PM - 04:30 PM",
      title: "Poetry and Literature",
      description: "Readings and performances of traditional and contemporary Buga literature.",
      location: "Heritage Center",
    },
    {
      time: "05:00 PM - 07:00 PM",
      title: "Closing Ceremony",
      description: "Official closing of the festival with special performances and fireworks.",
      location: "Main Stage",
    },
  ],
}

export function EventSchedule() {
  const [activeDay, setActiveDay] = useState("day1")

  return (
    <Tabs defaultValue="day1" onValueChange={setActiveDay} className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="day1">Day 1 (June 15)</TabsTrigger>
        <TabsTrigger value="day2">Day 2 (June 16)</TabsTrigger>
        <TabsTrigger value="day3">Day 3 (June 17)</TabsTrigger>
      </TabsList>
      {Object.keys(scheduleData).map((day) => (
        <TabsContent key={day} value={day} className="space-y-4">
          {scheduleData[day as keyof typeof scheduleData].map((event, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.location}</CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {event.time}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
