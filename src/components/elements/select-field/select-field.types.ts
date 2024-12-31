import { FieldValues } from "react-hook-form"
import { ControlledFormField } from "../form-field.types"

export interface ControlledSelectFieldProps<
  TFieldValues extends FieldValues,
  TValue,
> extends ControlledFormField<TFieldValues, TValue> {
  options: SelectOptions
  leadIcon?: React.ReactNode
}

export type SelectOptions<TValue = string> = {
  label: string
  value: TValue
  id: string
}[]
