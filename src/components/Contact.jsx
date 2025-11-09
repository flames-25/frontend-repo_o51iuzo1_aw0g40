import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Let’s build something great</h2>
          <p className="mt-2 text-gray-600">I’m open to freelance, full-time roles, and collaborations. Drop a message and I’ll get back soon.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <a href="mailto:your@email.com" className="group rounded-2xl border bg-white/60 backdrop-blur-sm border-white/60 shadow-sm p-6 hover:shadow-xl transition-shadow">
            <Mail className="text-gray-700" />
            <h3 className="mt-3 font-semibold text-gray-900">Email</h3>
            <p className="text-sm text-gray-600">Reach me directly via email.</p>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="group rounded-2xl border bg-white/60 backdrop-blur-sm border-white/60 shadow-sm p-6 hover:shadow-xl transition-shadow">
            <Github className="text-gray-700" />
            <h3 className="mt-3 font-semibold text-gray-900">GitHub</h3>
            <p className="text-sm text-gray-600">Check my latest code and projects.</p>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="group rounded-2xl border bg-white/60 backdrop-blur-sm border-white/60 shadow-sm p-6 hover:shadow-xl transition-shadow">
            <Linkedin className="text-gray-700" />
            <h3 className="mt-3 font-semibold text-gray-900">LinkedIn</h3>
            <p className="text-sm text-gray-600">Connect professionally and say hi.</p>
          </a>
        </div>
      </div>
    </section>
  )
}
