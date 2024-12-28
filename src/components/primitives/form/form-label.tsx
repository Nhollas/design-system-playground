import { useFormField } from "./use-form-field"
import { LabelProps } from "react-aria-components"
import { Label } from "../label"
import Text from "../text"

export interface FormLabelProps extends LabelProps {
  optional?: boolean
}
export const FormLabel: React.FC<FormLabelProps> = ({
  className,
  optional = false,
  children,
  ...props
}) => {
  const { formItemId } = useFormField()

  return (
    <Label className={className} htmlFor={formItemId} {...props}>
      {children}
      {optional && (
        <Text.Paragraph as="span" size="sm" weight="medium">
          (optional)
        </Text.Paragraph>
      )}
    </Label>
  )
}
