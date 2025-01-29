import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_layout/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home"!</div>
}
