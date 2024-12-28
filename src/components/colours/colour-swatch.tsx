interface ColourSwatchProps {
  name: string
  colorClass: string
}

export function ColourSwatch({ name, colorClass }: ColourSwatchProps) {
  return (
    <div className="flex flex-col gap-x-12 rounded-8 border border-neutral-200">
      <div className={`w-full h-64 rounded-8 rounded-b-0 ${colorClass}`} />
      <div className="p-12 border-t border-neutral-200">
        <p className="text-neutral-900 font-regular">{name}</p>
      </div>
    </div>
  )
}
