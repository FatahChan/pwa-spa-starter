import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/_public-layout/")({
  component: HomePage,
});

function HomePage() {
  return <div>Homepage</div>;
}
