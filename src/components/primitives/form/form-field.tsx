import {
  ControllerProps,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form"
import { FormFieldContext } from "./form-field-context"

type FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
  render: (
    props: ReturnType<typeof useController<TFieldValues, TName>> & {
      isSuccess: boolean
      isError: boolean
    },
  ) => React.ReactNode
}

export function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(props: FormFieldProps<TFieldValues, TName>) {
  const { field, fieldState, formState } = useController(props)
  const { isTouched, invalid, error } = fieldState
  const isSuccess = isTouched && !invalid
  const isError = !!error

  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      {props.render({
        field,
        fieldState,
        formState,
        isSuccess,
        isError,
      })}
    </FormFieldContext.Provider>
  )
}
