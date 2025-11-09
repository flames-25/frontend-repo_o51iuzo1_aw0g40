import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="m-3 rounded-2xl backdrop-blur-md bg-white/60 border border-white/40 shadow-lg">
          <div className="px-6 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-gray-900">My Portfolio</a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/70"
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/50 px-6 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
