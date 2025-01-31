import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/_public-layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(public)/_public-layout/"!</div>;
}
