import { FieldValues } from "react-hook-form"
import { ControlledFormField } from "../form-field.types"
import { ListBoxOption } from "@/components/primitives/list-box"

/** Common fields shared between both union branches */
interface CommonProps<TFieldValues extends FieldValues, TValue>
  extends ControlledFormField<TFieldValues, TValue> {
  leadIcon?: React.ReactNode
  tailIcon?: React.ReactNode
  loadingText?: string
  emptyText?: string
  getOptionValue: (option: ListBoxOption) => TValue
  getDisplayValue: (option: ListBoxOption) => string
}

/** One way: Provide a queryFn */
interface WithQueryFn<TFieldValues extends FieldValues, TValue>
  extends CommonProps<TFieldValues, TValue> {
  queryFn: (term: string) => Promise<ListBoxOption[]>
  options?: never
}

/** Alternate way: Provide options */
interface WithOptions<TFieldValues extends FieldValues, TValue>
  extends CommonProps<TFieldValues, TValue> {
  options: ListBoxOption[]
  queryFn?: never
}

/** Discriminated union: exactly one shape must match */
export type ControlledAutocompleteTextFieldProps<
  TFieldValues extends FieldValues,
  TValue,
> = WithQueryFn<TFieldValues, TValue> | WithOptions<TFieldValues, TValue>
