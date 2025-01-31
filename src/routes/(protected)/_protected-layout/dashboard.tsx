import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(protected)/_protected-layout/dashboard',
)({
  component: DashboardPage,
})

function DashboardPage() {
  return <button className="btn">Button</button>
}
