import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_protected-layout")({
  component: ProtectedLayout,
});

function ProtectedLayout() {
  return (
    <div>
      <div>Public Layout</div>
      <Outlet />
    </div>
  );
}
