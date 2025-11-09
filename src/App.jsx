import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />
        <Projects />

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl p-10 bg-gradient-to-br from-indigo-50 to-fuchsia-50 border">
              <h3 className="text-2xl font-bold">About Me</h3>
              <p className="mt-2 text-gray-700 max-w-3xl">
                I’m a front-end developer focused on crafting intuitive, accessible interfaces. I love blending clean design, subtle motion, and real-world performance. When I’m not coding, you’ll find me exploring new tools, reading about product, or sketching UI ideas.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-8 border-t">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
