import { Link, createFileRoute } from '@tanstack/react-router'
import pharmacyProducts from '@/data/pharmacy-products'

export const Route = createFileRoute('/el-bendary/products/$productId')({
  component: ProductDetail,
  loader: async ({ params }) => {
    const product = pharmacyProducts.find((p) => p.id === +params.productId)
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function ProductDetail() {
  const product = Route.useLoaderData()

  return (
    <div className="max-w-4xl mx-auto px-5 py-14">
      <Link to="/el-bendary" className="inline-block mb-6 text-[#2a78d6] font-medium hover:underline">
        &larr; Back to catalog
      </Link>
      <div className="rounded-2xl border border-black/10 p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#898781]">
            {product.category}
          </span>
          {product.requiresPrescription && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#fab219]/20 text-[#7a5400]">
              Rx required
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-[#52514e] mb-8 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between border-t border-black/10 pt-6">
          <div>
            <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
            <div
              className={
                product.inStock
                  ? 'text-sm font-medium text-[#0ca30c]'
                  : 'text-sm font-medium text-[#d03b3b]'
              }
            >
              {product.inStock ? 'In stock' : 'Out of stock'}
            </div>
          </div>
          <button
            className="px-6 py-2.5 rounded-lg bg-[#2a78d6] text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={!product.inStock}
          >
            {product.requiresPrescription ? 'Upload prescription' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
