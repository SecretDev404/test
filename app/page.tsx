"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, ShoppingBag, Star } from "lucide-react"

// Sample product data
const products = [
  {
    id: 1,
    name: "Secret Role",
    price: "Rp 350.000",
    image: "/summer.png",
    category: "Role",
    description:
      "Secret Role Like A Clist But The Command So OP!!!!.",
    features: ["Secret!! IF U WANT SEE BUY IT"],
    rating: 4.8,
    stock: "Tersedia",
  },
  {
    id: 2,
    name: "Administrator",
    price: "Rp 200.000",
    image: "/summer1.png",
    category: "Role",
    description:
      "Administrator Role So OP too but not much, Got Unli Command And Another.",
    features: ["Command Unlimited All u can see the feature on /?"],
    rating: 4.9,
    stock: "Tersedia",
  },
  {
    id: 3,
    name: "Staff",
    price: "Rp 150.000",
    image: "/summer2.png",
    category: "Role",
    description:
      "Staff Functions tbusive! get unlimited item benefits but don't be abusive!.",
    features: ["Unlimited Item and another feature on /?"],
    rating: 4.7,
    stock: "Tersedia",
  },
  {
    id: 4,
    name: "DevMax",
    price: "Rp 120.000",
    image: "/summer3.png",
    category: "Role",
    description:
      "DevMax Got Unli Item but Dont Abuse It.",
    features: ["Check at /?],
    stock: "Stok Terbatas",
  },
  {
    id: 5,
    name: "Super Developer",
    price: "Rp 80.000",
    image: "/summer4.png",
    category: "Role",
    description:
      "Not Unli All.",
    features: ["commmand see /?"],
    rating: 4.8,
    stock: "Tersedia",
  },
  {
    id: 6,
    name: "Moderator",
    price: "Rp 30.000",
    image: "/summer5.png",
    category: "Role",
    description:
      "Basic Role.",
    features: ["command see /?"],
    rating: 4.5,
    stock: "Tersedia",
  },
]

export default function StorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const categories = ["Semua", ...Array.from(new Set(products.map((p) => p.category)))]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleWhatsAppContact = (product: (typeof products)[0]) => {
    const message = `Halo! Saya tertarik dengan produk ${product.name} seharga ${product.price}. Bisakah Anda memberikan informasi lebih lanjut?`
    const whatsappUrl = `https://wa.me/6281235537602?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">Purchase Role SummerPS</h1>
            </div>
            <Button
              onClick={() => window.open("https://wa.me/6281235537602", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Summer Private Server</h2>
          <p className="text-xl text-muted-foreground mb-8">Dapatkan produk dengan harga terbaik</p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </div>
                    <Badge variant={product.stock === "Tersedia" ? "default" : "secondary"}>{product.stock}</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          Detail
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{product.name}</DialogTitle>
                          <DialogDescription>{product.category}</DialogDescription>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full rounded-lg"
                            />
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Deskripsi</h4>
                              <p className="text-sm text-muted-foreground">{product.description}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Fitur Utama</h4>
                              <ul className="text-sm space-y-1">
                                {product.features.map((feature, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t">
                              <span className="text-2xl font-bold text-primary">{product.price}</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{product.rating}</span>
                              </div>
                            </div>
                            <Button
                              onClick={() => handleWhatsAppContact(product)}
                              className="w-full bg-green-500 hover:bg-green-600"
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Beli via WhatsApp
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      onClick={() => handleWhatsAppContact(product)}
                      className="flex-1 bg-green-500 hover:bg-green-600"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Beli
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open("https://wa.me/6281235537602", "_blank")}
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Purchase Role SummerPS</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            SummerPS terpercaya dengan produk berkualitas dan pelayanan terbaik
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm">
              Tentang Kami
            </Button>
            <Button variant="outline" size="sm">
              Kontak
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.open("https://wa.me/6281235537602", "_blank")}>
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t text-sm text-muted-foreground">
            © 2024 TechStore. Semua hak dilindungi.
          </div>
        </div>
      </footer>
    </div>
  )
}
