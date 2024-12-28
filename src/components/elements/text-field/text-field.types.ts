import { FieldValues } from "react-hook-form"
import { ControlledFormField } from "../form-field.types"
import { InputProps } from "@/components/primitives/input"

export interface ControlledTextFieldProps<
  TFieldValues extends FieldValues,
  TValue,
> extends ControlledFormField<TFieldValues, TValue>,
    InputProps {
  leadIcon?: React.ReactNode
  tailIcon?: React.ReactNode
}
