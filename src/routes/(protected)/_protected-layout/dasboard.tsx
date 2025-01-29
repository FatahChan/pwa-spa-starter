import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_protected-layout/dasboard")(
  {
    component: DashboardPage,
  }
);

function DashboardPage() {
  return <div>Hello "/(protected)/_protected-layout/dasboard"!</div>;
}
