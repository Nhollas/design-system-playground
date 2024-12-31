import Text from "@/components/primitives/text"

export function TypographyGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex gap-40 flex-col">
      <Text.HeadingL as="h2">{title}</Text.HeadingL>
      <div className="flex flex-col gap-64">{children}</div>
    </section>
  )
}
