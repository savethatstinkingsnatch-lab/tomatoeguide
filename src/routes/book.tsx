import { createFileRoute } from "@tanstack/react-router";
import { BookShell } from "@/components/book/shell";

export const Route = createFileRoute("/book")({
  component: BookShell,
});
