import { SlotProps, Slot } from "@radix-ui/react-slot"
import { useFormField } from "./use-form-field"

export const FormControl: React.FC<SlotProps> = ({ ...props }) => {
  const {
    error,
    formItemId,
    formDescriptionId,
    formMessageId,
    invalid,
    isTouched,
  } = useFormField()
  const isSuccess = isTouched && !invalid
  const isError = !!error

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      data-success={isSuccess}
      data-error={isError}
      {...props}
    />
  )
}
