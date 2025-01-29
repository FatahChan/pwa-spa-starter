import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth-layout/login')({
  component: LoginPage,
})

function LoginPage() {
  return <div>LoginPage</div>
}
