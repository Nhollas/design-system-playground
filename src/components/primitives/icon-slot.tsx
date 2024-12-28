import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

export interface IconSlotProps {
  className?: string
  children?: React.ReactNode
  size?: "sm" | "md" | "lg"
}

function IconSlot({ children, className, size = "md" }: IconSlotProps) {
  return (
    <Slot
      data-slot="icon"
      className={cn(
        "shrink-0",
        {
          "size-16 desktop:size-20": size === "sm",
          "size-20 desktop:size-24": size === "md",
          "size-24 desktop:size-32": size === "lg",
        },
        className,
      )}
    >
      {children}
    </Slot>
  )
}

export { IconSlot }
