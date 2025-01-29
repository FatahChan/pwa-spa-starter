import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/_public-layout")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <div>
      <div>Public Layout</div>
      <Outlet />
    </div>
  );
}
