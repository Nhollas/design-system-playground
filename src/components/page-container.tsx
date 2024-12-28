export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 desktop:grid-cols-2 gap-16 desktop:gap-24 max-w-sm desktop:max-w-2xl mx-auto">
      {children}
    </div>
  )
}
