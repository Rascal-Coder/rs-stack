import { createFileRoute } from "@tanstack/react-router";

import { Container } from "@/shared/ui/container";

export const Route = createFileRoute("/{-$locale}/(root-layout)/(auth)/dashboard/")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
}
