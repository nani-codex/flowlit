"use client"
import Home from "@/app/ui/home"
import { useViewport } from "@/app/hooks/useViewport"

export default function Page() {
  const { isMobile } = useViewport();

  return <Home isMobile={isMobile} />;
}
