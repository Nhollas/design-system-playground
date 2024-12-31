import Text from "@/components/primitives/text"

interface TypographyVariantProps {
  title: string
  subheading: string
  children?: React.ReactNode
}

export function TypographyVariant({
  title,
  subheading,
  children,
}: TypographyVariantProps) {
  return (
    <div>
      <Text.HeadingM weight="medium">{title}</Text.HeadingM>
      <Text.Paragraph
        size="md"
        weight="regular"
        className="text-neutral-500 py-8"
      >
        {subheading}
      </Text.Paragraph>
      <div className="flex flex-wrap gap-40 items-center border-t border-neutral-500 pt-24 *:text-neutral-900">
        {children}
      </div>
    </div>
  )
}
