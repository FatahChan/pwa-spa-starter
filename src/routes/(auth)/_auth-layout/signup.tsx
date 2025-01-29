import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth-layout/signup')({
  component: SignupPage,
})

function SignupPage() {
  return (
    <div className="p-2">
      <h3>SignupPage</h3>
    </div>
  )
}
