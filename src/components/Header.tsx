import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2a78d6] text-white text-sm font-bold">
            M
          </span>
          MosTa&#8209;TecH
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-[#2a78d6]" activeOptions={{ exact: true }} activeProps={{ className: 'text-[#2a78d6]' }}>
            Home
          </Link>
          <Link to="/organizations" className="hover:text-[#2a78d6]" activeProps={{ className: 'text-[#2a78d6]' }}>
            Organizations
          </Link>
          <Link to="/el-bendary" className="hover:text-[#2a78d6]" activeProps={{ className: 'text-[#2a78d6]' }}>
            El-Bendary Pharmacies
          </Link>
        </nav>
      </div>
    </header>
  )
}
