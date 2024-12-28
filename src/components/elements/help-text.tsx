import { IconSlot } from "@/components/primitives/icon-slot"
import { Info } from "lucide-react"
import Text from "@/components/primitives/text"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  use,
  useState,
} from "react"
import { cn } from "@/lib/utils"
import { Button } from "react-aria-components"

type HelpTextContextValue = {
  open: boolean
  toggle: Dispatch<SetStateAction<boolean>>
}

const HelpTextContext = createContext({} as HelpTextContextValue)

interface HelpTextProviderProps {
  children: ReactNode
}

export function HelpTextProvider({ children }: HelpTextProviderProps) {
  const [open, toggle] = useState(false)

  return <HelpTextContext value={{ open, toggle }}>{children}</HelpTextContext>
}

export function HelpTextToggle({ className }: { className?: string }) {
  const { toggle } = use(HelpTextContext)

  return (
    <Button
      onPress={() => toggle((prev) => !prev)}
      className="size-[28px] desktop:size-32 z-20 -mx-4 rounded-full hover:bg-secondary-100 focus:border ring-secondary-200 outline-none focus:ring-2"
    >
      <Text.Paragraph as="span" className="sr-only">
        Toggle help text
      </Text.Paragraph>
      <IconSlot
        className={cn(
          "place-self-center text-secondary-600 cursor-pointer",
          className,
        )}
      >
        <Info />
      </IconSlot>
    </Button>
  )
}

export function HelpTextMessage({ children }: { children: ReactNode }) {
  const { open } = use(HelpTextContext)

  if (!open) return

  return (
    <Text.Paragraph
      size="md"
      className={cn("flex items-center gap-4 text-secondary-600")}
    >
      <IconSlot size="sm" className="text-inherit">
        <Info />
      </IconSlot>
      {children}
    </Text.Paragraph>
  )
}
