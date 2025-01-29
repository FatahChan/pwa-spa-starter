import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_auth-layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>Auth Layout</div>
      <Outlet />
    </div>
  );
}
