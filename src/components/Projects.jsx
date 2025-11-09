export default function Projects() {
  const projects = [
    {
      title: 'Interactive Dashboard',
      desc: 'A real-time dashboard with charts, filters, and live data.',
      tags: ['React', 'Tailwind', 'Charts'],
      link: '#',
    },
    {
      title: 'E-commerce UI',
      desc: 'Beautiful product pages, cart flow, and checkout experience.',
      tags: ['Vite', 'React', 'Stripe'],
      link: '#',
    },
    {
      title: 'Portfolio Template',
      desc: 'Clean, responsive portfolio with animations and 3D elements.',
      tags: ['Spline', 'Framer Motion', 'Tailwind'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-2 text-gray-600">A few projects that highlight my focus on delightful UX, accessibility, and performance.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-2xl border bg-white/60 backdrop-blur-sm border-white/60 shadow-sm p-6 hover:shadow-xl transition-shadow">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-indigo-500/0 via-fuchsia-500/0 to-cyan-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 group-hover:from-indigo-500/20 group-hover:via-fuchsia-500/20 group-hover:to-cyan-500/20 transition-opacity pointer-events-none" />
              <div className="relative">
                <div className="h-36 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
