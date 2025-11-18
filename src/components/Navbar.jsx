import { Hexagon, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur-md bg-neutral-900/70 border-b border-yellow-500/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <span className="relative inline-flex items-center justify-center">
            <span className="absolute inset-0 rounded-lg blur-md bg-yellow-500/30" />
            <Hexagon className="relative text-yellow-400" size={28} />
          </span>
          <span className="text-white font-semibold tracking-tight">HiveHub</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-neutral-300 hover:text-yellow-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="px-4 py-2 text-sm font-medium rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 transition-colors"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-yellow-400"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-yellow-500/10 bg-neutral-900/95">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-neutral-200 hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex mt-2 px-4 py-2 text-sm font-medium rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
