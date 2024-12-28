import { TriangleAlert } from "lucide-react"
import { useFormField } from "../form"
import { IconSlot } from "../icon-slot"
import Text, { TextProps } from "../text"
import { cn } from "@/lib/utils"

export const FormMessage: React.FC<TextProps> = ({
  className,
  children,
  ...props
}) => {
  const { error, formMessageId } = useFormField()
  const content = error ? error?.message : children

  if (!content) {
    return null
  }

  return (
    <Text.Paragraph
      id={formMessageId}
      size="md"
      className={cn("flex items-center gap-4 text-error-600", className)}
      {...props}
    >
      <IconSlot size="sm">
        <TriangleAlert />
      </IconSlot>
      {content}
    </Text.Paragraph>
  )
}
