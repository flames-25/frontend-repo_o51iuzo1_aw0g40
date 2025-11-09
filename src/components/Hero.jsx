import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            Available for freelance work
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-gray-900">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">Your Name</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            I craft delightful, performant web experiences with modern tools. Explore my selected work and feel free to reach out.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 border hover:bg-gray-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/30 blur-2xl rounded-3xl pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-white/60 border border-white/50 rounded-3xl p-6 shadow-xl">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm text-gray-600">Experience</dt>
                <dd className="text-2xl font-semibold text-gray-900">5+ yrs</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Projects</dt>
                <dd className="text-2xl font-semibold text-gray-900">24</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Clients</dt>
                <dd className="text-2xl font-semibold text-gray-900">18</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Stack</dt>
                <dd className="text-2xl font-semibold text-gray-900">React · Node</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
