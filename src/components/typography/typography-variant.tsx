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
      <Text.HeadingS as="h3">{title}</Text.HeadingS>
      <Text.Paragraph size="md" className="py-12 desktop:py-16">
        {subheading}
      </Text.Paragraph>
      <div className="flex flex-wrap gap-40 items-center border-t border-neutral-700 pt-12 *:text-neutral-900">
        {children}
      </div>
    </div>
  )
}
