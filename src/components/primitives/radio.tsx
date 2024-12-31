import type {
  RadioGroupProps,
  RadioProps,
  ValidationResult,
} from "react-aria-components"
import {
  Text,
  FieldError,
  RadioGroup as ReactAriaRadioGroup,
  Radio as ReactAriaRadio,
} from "react-aria-components"
import { Label } from "./label"

interface MyRadioGroupProps extends Omit<RadioGroupProps, "children"> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyRadioGroupProps) {
  return (
    <ReactAriaRadioGroup {...props}>
      <Label>{label}</Label>
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </ReactAriaRadioGroup>
  )
}

function RadioItem(props: RadioProps) {
  return <ReactAriaRadio {...props} />
}

export { RadioGroup, RadioItem }
