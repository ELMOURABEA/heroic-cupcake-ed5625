export interface DashboardStat {
  label: string
  value: string
  delta: string
  status: 'good' | 'warning'
}

export interface RecentOrder {
  id: string
  customer: string
  branch: string
  total: number
  status: 'Fulfilled' | 'Processing' | 'Awaiting Rx'
}

export interface InventoryAlert {
  product: string
  branch: string
  level: 'Low stock' | 'Out of stock'
}

export const dashboardStats: Array<DashboardStat> = [
  { label: "Today's orders", value: '184', delta: '+12% vs. yesterday', status: 'good' },
  { label: "Today's revenue", value: '$6,240', delta: '+8% vs. yesterday', status: 'good' },
  { label: 'Active branches', value: '5', delta: 'All reporting', status: 'good' },
  { label: 'Inventory alerts', value: '7', delta: '3 out of stock', status: 'warning' },
]

export const recentOrders: Array<RecentOrder> = [
  { id: 'ORD-10493', customer: 'S. Haddad', branch: 'Maadi Branch', total: 42.5, status: 'Fulfilled' },
  { id: 'ORD-10492', customer: 'M. El-Bendary', branch: 'Nasr City Branch', total: 128.0, status: 'Processing' },
  { id: 'ORD-10491', customer: 'A. Youssef', branch: 'Online', total: 19.99, status: 'Awaiting Rx' },
  { id: 'ORD-10490', customer: 'R. Nabil', branch: 'Heliopolis Branch', total: 63.4, status: 'Fulfilled' },
  { id: 'ORD-10489', customer: 'F. Karim', branch: 'Online', total: 34.99, status: 'Fulfilled' },
]

export const inventoryAlerts: Array<InventoryAlert> = [
  { product: 'Infant Fever Relief Drops', branch: 'Nasr City Branch', level: 'Out of stock' },
  { product: 'Digital Blood Pressure Monitor', branch: 'Maadi Branch', level: 'Low stock' },
  { product: 'Metformin 500mg', branch: 'Heliopolis Branch', level: 'Low stock' },
]
