import { FieldValues } from "react-hook-form"
import { ControlledFormField } from "../form-field.types"
import { InputProps } from "@/components/primitives/input"
import { ReactNode } from "react"

export interface ControlledTextFieldProps<
  TFieldValues extends FieldValues,
  TValue,
> extends ControlledFormField<TFieldValues, TValue>,
    InputProps {
  leadIcon?: ReactNode
  tailIcon?: ReactNode
}
