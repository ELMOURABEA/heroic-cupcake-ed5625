import { Link, createFileRoute } from '@tanstack/react-router'
import organizations from '@/data/organizations'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const flagship = organizations.find((org) => org.flagship)

  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold text-[#2a78d6] mb-3 uppercase tracking-wide">
            Enterprise Ecosystem
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            MosTa&#8209;TecH
          </h1>
          <p className="text-lg text-[#52514e] mb-8 max-w-xl">
            One enterprise, seven organizations, a single professional foundation for
            pharmacy retail, healthcare software, automation and market intelligence &mdash;
            starting with the El&#8209;Bendary Pharmacies platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/organizations"
              className="px-6 py-3 rounded-lg bg-[#2a78d6] text-white font-semibold hover:bg-[#256abf]"
            >
              View organizations
            </Link>
            <Link
              to="/el-bendary"
              className="px-6 py-3 rounded-lg border border-black/15 font-semibold hover:border-[#2a78d6] hover:text-[#2a78d6]"
            >
              Explore El-Bendary Pharmacies
            </Link>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-black/10">
          <img
            src="/.netlify/images?url=/img/hero-enterprise.png&w=1000&fm=webp"
            alt="MosTa-TecH enterprise network illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Ecosystem grid */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">The ecosystem</h2>
            <p className="text-[#52514e]">Seven organizations, one governance standard.</p>
          </div>
          <Link to="/organizations" className="text-[#2a78d6] font-semibold hover:underline whitespace-nowrap">
            See full structure &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {organizations.map((org) => (
            <div
              key={org.slug}
              className="rounded-2xl border border-black/10 p-6 hover:border-[#2a78d6]/50 transition-colors"
            >
              <h3 className="font-bold text-lg mb-1">{org.name}</h3>
              <p className="text-sm text-[#898781] mb-3">{org.tagline}</p>
              <p className="text-sm text-[#52514e]">{org.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship spotlight */}
      {flagship && (
        <section className="max-w-7xl mx-auto px-5 py-16">
          <div className="rounded-3xl border border-black/10 overflow-hidden grid md:grid-cols-2">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <p className="text-sm font-semibold text-[#2a78d6] mb-3 uppercase tracking-wide">
                Flagship product &middot; {flagship.name}
              </p>
              <h2 className="text-3xl font-bold mb-4">El-Bendary Pharmacies</h2>
              <p className="text-[#52514e] mb-6">
                The first product live on the new foundation: a pharmacy storefront and
                operations platform serving customers online and across branches, with an
                operations dashboard for staff.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/el-bendary"
                  className="px-5 py-2.5 rounded-lg bg-[#2a78d6] text-white font-semibold hover:bg-[#256abf]"
                >
                  Visit storefront
                </Link>
                <Link
                  to="/el-bendary/dashboard"
                  className="px-5 py-2.5 rounded-lg border border-black/15 font-semibold hover:border-[#2a78d6] hover:text-[#2a78d6]"
                >
                  Operations dashboard
                </Link>
              </div>
            </div>
            <img
              src="/.netlify/images?url=/img/hero-pharmacy.png&w=900&fm=webp"
              alt="El-Bendary Pharmacies illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}
    </div>
  )
}
