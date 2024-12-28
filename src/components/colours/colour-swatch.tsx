interface ColourSwatchProps {
  name: string
  colorClass: string
}

export function ColourSwatch({ name, colorClass }: ColourSwatchProps) {
  return (
    <div className="flex flex-row p-12 gap-x-12 outline outline-neutral-100 rounded-8 shadow">
      <div
        className={`size-48 rounded-8 border border-neutral-100 ${colorClass}`}
      />
      <p className="text-neutral-900 font-semibold text-base">{name}</p>
    </div>
  )
}
