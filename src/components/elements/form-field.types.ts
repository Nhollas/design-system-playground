import { Control, FieldPathByValue, FieldValues } from "react-hook-form"

export interface ControlledFormField<TFieldValues extends FieldValues, TValue> {
  fieldPath: FieldPathByValue<TFieldValues, TValue>
  label: string
  isOptional?: boolean
  description?: string
  control: Control<TFieldValues>
  helpText?: string
  placeholder?: string
}
