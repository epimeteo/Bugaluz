import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Buga Cultural Festival</h3>
            <p className="text-muted-foreground">Celebrating the rich heritage and traditions of Buga since 1975.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-primary">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Buga City Center</p>
              <p>123 Festival Street</p>
              <p>Buga, Colombia</p>
              <p className="mt-2">info@bugafestival.com</p>
              <p>+57 123 456 7890</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">Subscribe to our newsletter</p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 border rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Buga Cultural Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
