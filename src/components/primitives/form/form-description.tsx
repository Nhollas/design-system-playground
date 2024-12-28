import { CircleHelp } from "lucide-react"
import Text, { TextProps } from "../text"
import { useFormField } from "./use-form-field"
import { IconSlot } from "../icon-slot"
import { cn } from "@/lib/utils"

export const FormDescription: React.FC<TextProps & { showIcon?: boolean }> = ({
  className,
  children,
  ...props
}) => {
  const { formDescriptionId, error } = useFormField()

  return (
    <Text.Paragraph
      id={formDescriptionId}
      className={cn("flex items-center gap-4", error && "hidden", className)}
      {...props}
    >
      <IconSlot size="sm" className="text-neutral-700">
        <CircleHelp />
      </IconSlot>
      {children}
    </Text.Paragraph>
  )
}
