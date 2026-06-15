import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$locale}/(root-layout)/(auth)")({
  component: RequiresAuthLayout
});

function RequiresAuthLayout() {
  return <Outlet />;
}
