"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
    country: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formState)
    alert("Thank you for your message! We will get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "general",
      country: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Our Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Buga City Center
              <br />
              123 Festival Street
              <br />
              Buga, Colombia
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>Phone & Email</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              <strong>Phone:</strong> +57 123 456 7890
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> info@bugafestival.com
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Office Hours</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              <strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM
            </p>
            <p className="text-muted-foreground">
              <strong>Weekend:</strong> Closed (except during festival)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select value={formState.country} onValueChange={(value) => handleSelectChange("country", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="colombia">Colombia</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="mexico">Mexico</SelectItem>
                  <SelectItem value="brazil">Brazil</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Inquiry Type</Label>
              <RadioGroup
                value={formState.inquiryType}
                onValueChange={(value) => handleSelectChange("inquiryType", value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general">General Information</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vendor" id="vendor" />
                  <Label htmlFor="vendor">Vendor/Exhibitor Inquiry</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="performer" id="performer" />
                  <Label htmlFor="performer">Performer Application</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="press" id="press" />
                  <Label htmlFor="press">Press/Media</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
          <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center mb-6">
            <p className="text-muted-foreground">
              Map will be displayed here
              {/* In a real application, you would embed a Google Map or similar here */}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions about the festival</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">When is the next festival?</h3>
                <p className="text-sm text-muted-foreground">
                  The next Buga Cultural Festival will take place from June 15-20, 2025.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">How can I participate as a vendor?</h3>
                <p className="text-sm text-muted-foreground">
                  Vendor applications open on January 15, 2025. Please select "Vendor/Exhibitor Inquiry" in the contact
                  form for more information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Are there accommodation packages available?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we partner with local hotels to offer special rates for festival attendees. Details will be
                  available three months before the festival.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Is the festival suitable for children?</h3>
                <p className="text-sm text-muted-foreground">
                  The festival includes many family-friendly activities and dedicated children's workshops and
                  performances.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Volunteer With Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          The Buga Cultural Festival is made possible by our dedicated team of volunteers. If you're passionate about
          cultural preservation and community engagement, we'd love to have you join our team!
        </p>
        <Button variant="outline" size="lg">
          Become a Volunteer
        </Button>
      </div>
    </div>
  )
}
