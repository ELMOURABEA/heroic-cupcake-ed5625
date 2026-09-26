import { Link, createFileRoute } from '@tanstack/react-router'
import pharmacyProducts from '@/data/pharmacy-products'

export const Route = createFileRoute('/el-bendary/')({
  component: ElBendaryStorefront,
})

function ElBendaryStorefront() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-5 pt-14 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold text-[#2a78d6] mb-3 uppercase tracking-wide">
            Mosta-Pharm &middot; Flagship product
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">El-Bendary Pharmacies</h1>
          <p className="text-lg text-[#52514e] mb-6 max-w-xl">
            Order medicine and health products online, refill prescriptions, and pick up
            or get same-day delivery from your nearest branch.
          </p>
          <Link
            to="/el-bendary/dashboard"
            className="text-[#2a78d6] font-semibold hover:underline"
          >
            Staff operations dashboard &rarr;
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden border border-black/10">
          <img
            src="/.netlify/images?url=/img/hero-pharmacy.png&w=900&fm=webp"
            alt="El-Bendary Pharmacies"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="text-2xl font-bold mb-8">Catalog</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pharmacyProducts.map((product) => (
            <Link
              key={product.id}
              to="/el-bendary/products/$productId"
              params={{ productId: product.id.toString() }}
              className="rounded-2xl border border-black/10 p-6 flex flex-col hover:border-[#2a78d6]/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#898781]">
                  {product.category}
                </span>
                {product.requiresPrescription && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#fab219]/20 text-[#7a5400]">
                    Rx required
                  </span>
                )}
              </div>
              <h3 className="font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-[#52514e] mb-4 flex-1">{product.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <span
                  className={
                    product.inStock
                      ? 'text-sm font-medium text-[#0ca30c]'
                      : 'text-sm font-medium text-[#d03b3b]'
                  }
                >
                  {product.inStock ? 'In stock' : 'Out of stock'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
