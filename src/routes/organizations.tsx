import { Link, createFileRoute } from '@tanstack/react-router'
import organizations from '@/data/organizations'

export const Route = createFileRoute('/organizations')({
  component: Organizations,
})

function Organizations() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <p className="text-sm font-semibold text-[#2a78d6] mb-3 uppercase tracking-wide">
        Enterprise structure
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">MosTa-TecH organizations</h1>
      <p className="text-[#52514e] max-w-2xl mb-12">
        Every product in the ecosystem sits under one of these organizations. Each
        organization follows the same governance, security and contribution standards
        described in the project&rsquo;s root documentation.
      </p>

      <div className="space-y-6">
        {organizations.map((org) => (
          <div
            key={org.slug}
            id={org.slug}
            className="rounded-2xl border border-black/10 p-8 scroll-mt-24"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h2 className="text-xl font-bold">{org.name}</h2>
              <span className="text-sm text-[#898781]">{org.tagline}</span>
            </div>
            <p className="text-[#52514e] mb-5 max-w-3xl">{org.description}</p>
            {org.products.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {org.products.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-xl bg-black/[0.03] px-4 py-3 text-sm"
                  >
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-[#898781]">{product.description}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#898781] italic">No products published yet.</p>
            )}
            {org.flagship && (
              <Link
                to="/el-bendary"
                className="inline-block mt-5 text-[#2a78d6] font-semibold hover:underline"
              >
                Visit El-Bendary Pharmacies &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
