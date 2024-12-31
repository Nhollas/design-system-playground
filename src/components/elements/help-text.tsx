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

function HelpTextProvider({ children }: HelpTextProviderProps) {
  const [open, toggle] = useState(false)

  return <HelpTextContext value={{ open, toggle }}>{children}</HelpTextContext>
}

function HelpTextToggle({ className }: { className?: string }) {
  const { toggle } = use(HelpTextContext)

  return (
    <Button
      onPress={() => toggle((prev) => !prev)}
      className="size-[22px] desktop:size-[26px] z-20 -mx-2 rounded-full ring-secondary-200 outline-none focus:ring-2 flex justify-center items-center hover:ring-2"
    >
      <Text.Paragraph as="span" className="sr-only">
        Toggle help text
      </Text.Paragraph>
      <IconSlot className={cn("text-secondary-600 cursor-pointer", className)}>
        <Info />
      </IconSlot>
    </Button>
  )
}

function HelpTextMessage({ children }: { children: ReactNode }) {
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

export { HelpTextProvider, HelpTextToggle, HelpTextMessage }
