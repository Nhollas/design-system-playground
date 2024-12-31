import { SelectOptions } from "./select-field.types"

export const createSelectOptions = (
  options: ReadonlyArray<string> | string[],
): SelectOptions =>
  options.map((opt) => ({
    label: opt,
    value: opt,
    id: crypto.randomUUID(),
  }))
