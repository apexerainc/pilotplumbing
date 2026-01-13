import { ExternalLinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExternalLinkProps {
  className?: string
}

export default function ExternalLink({ className }: ExternalLinkProps) {
  return <ExternalLinkIcon className={cn("h-4 w-4", className)} />
}
