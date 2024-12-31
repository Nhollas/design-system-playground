import { useFormField } from "./use-form-field"
import { Label, LabelProps } from "../label"
import Text from "../text"

export type FormLabelProps = LabelProps

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
