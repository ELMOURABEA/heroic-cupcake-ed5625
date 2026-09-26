import { createFileRoute } from '@tanstack/react-router'
import { AlertTriangle, CircleCheck } from 'lucide-react'
import { dashboardStats, inventoryAlerts, recentOrders } from '@/data/pharmacy-dashboard'

export const Route = createFileRoute('/el-bendary/dashboard')({
  component: OperationsDashboard,
})

const statusStyles: Record<string, string> = {
  Fulfilled: 'bg-[#0ca30c]/10 text-[#0ca30c]',
  Processing: 'bg-[#2a78d6]/10 text-[#2a78d6]',
  'Awaiting Rx': 'bg-[#fab219]/20 text-[#7a5400]',
}

function OperationsDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-14">
      <p className="text-sm font-semibold text-[#2a78d6] mb-3 uppercase tracking-wide">
        El-Bendary Pharmacies &middot; Staff view
      </p>
      <h1 className="text-3xl font-bold mb-2">Operations dashboard</h1>
      <p className="text-[#52514e] mb-10 max-w-2xl">
        A preview of the operations overview staff will see across branches. Figures
        below are sample data for this early look at the platform.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-black/10 p-6">
            <div className="text-sm text-[#898781] mb-2">{stat.label}</div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div
              className={`flex items-center gap-1.5 text-sm font-medium ${
                stat.status === 'good' ? 'text-[#0ca30c]' : 'text-[#7a5400]'
              }`}
            >
              {stat.status === 'good' ? (
                <CircleCheck size={15} />
              ) : (
                <AlertTriangle size={15} />
              )}
              {stat.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Recent orders</h2>
          <div className="rounded-2xl border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-black/[0.03] text-left text-[#898781]">
                <tr>
                  <th className="px-5 py-3 font-medium">Order</th>
                  <th className="px-5 py-3 font-medium">Customer</th>
                  <th className="px-5 py-3 font-medium">Branch</th>
                  <th className="px-5 py-3 font-medium text-right">Total</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-t border-black/10">
                    <td className="px-5 py-3 font-medium">{order.id}</td>
                    <td className="px-5 py-3">{order.customer}</td>
                    <td className="px-5 py-3 text-[#898781]">{order.branch}</td>
                    <td className="px-5 py-3 text-right font-medium">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Inventory alerts</h2>
          <div className="space-y-3">
            {inventoryAlerts.map((alert) => (
              <div
                key={`${alert.product}-${alert.branch}`}
                className="rounded-xl border border-black/10 p-4 flex items-start gap-3"
              >
                <AlertTriangle size={18} className="text-[#7a5400] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-sm">{alert.product}</div>
                  <div className="text-xs text-[#898781]">{alert.branch}</div>
                  <div className="text-xs font-semibold text-[#7a5400] mt-1">{alert.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
