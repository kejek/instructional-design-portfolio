'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Code, FileText, Lightbulb, Mail } from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus('sending')

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <BookOpen className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Mandie Carter</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">Skills</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">Projects</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">Experience</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
            </nav>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isMenuOpen}
            aria-controls="radix-:R1mcq:"
            data-state={isMenuOpen ? "open" : "closed"}
            onClick={toggleMenu}
          >
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
          {isMenuOpen && (
            <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
              <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <a className="flex items-center space-x-2" href="/">
                  <BookOpen className="h-6 w-6" />
                  <span className="font-bold">Mandie Carter</span>
                </a>
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                  <a
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    href="#about"
                  >
                    About
                  </a>
                  <a
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    href="#skills"
                  >
                    Skills
                  </a>
                  <a
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    href="#projects"
                  >
                    Projects
                  </a>
                  <a
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    href="#experience"
                  >
                    Experience
                  </a>
                  <a
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    href="#contact"
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Mandie Carter
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Instructional Designer & eLearning Specialist
                </p>
              </div>
              <div className="space-x-4">
                <Button>View Projects</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Instructional Design</CardTitle>
                  <Lightbulb className="h-6 w-6" />
                </CardHeader>
                <CardContent>
                  <p>Expert in ADDIE model, Bloom&apos;s Taxonomy, and learning theories.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>eLearning Development</CardTitle>
                  <Code className="h-6 w-6" />
                </CardHeader>
                <CardContent>
                  <p>Proficient in Articulate Storyline, Adobe Captivate, and Camtasia.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>LMS Management</CardTitle>
                  <FileText className="h-6 w-6" />
                </CardHeader>
                <CardContent>
                  <p>Experienced with Moodle, Canvas, and Blackboard.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Corporate Training Program</CardTitle>
                  <CardDescription>eLearning course for new employee onboarding</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Developed a comprehensive onboarding program using Articulate Storyline, resulting in a 30% reduction in training time.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>University Online Course</CardTitle>
                  <CardDescription>Introduction to Psychology MOOC</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Designed and implemented a Massive Open Online Course that attracted over 10,000 students worldwide.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Experience</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Senior Instructional Designer</CardTitle>
                  <CardDescription>TechEd Solutions • 2018 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Lead a team of instructional designers in creating innovative eLearning solutions for corporate clients.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>eLearning Specialist</CardTitle>
                  <CardDescription>Global University • 2015 - 2018</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Developed and maintained online courses for various departments, focusing on student engagement and accessibility.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Me</h2>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below to send me a message.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" name="email" placeholder="Your email" required type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea id="message" name="message" placeholder="Your message" required />
                </div>
                <Button type="submit" disabled={formStatus === 'sending'}>
                  <Mail className="h-6 w-6 inline-block mr-2" />
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
                {formStatus === 'success' && (
                  <p className="text-green-600">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600">Error sending message. Please try again.</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 py-10 md:flex-row md:gap-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Mandie Carter.
          </p>
          <nav className="flex items-center justify-center gap-4 md:ml-auto md:gap-2 md:justify-end">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              LinkedIn
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Twitter
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}