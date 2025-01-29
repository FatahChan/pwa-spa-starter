import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div>
      <nav> This is a navigation header</nav>
      <Outlet />
    </div>
  )
}
