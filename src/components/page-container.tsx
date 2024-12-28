export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-16 max-w-sm mx-auto">{children}</div>
  )
}
