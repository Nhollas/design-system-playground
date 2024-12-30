import { FieldValues } from "react-hook-form"
import { ControlledTextFieldProps } from "./text-field.types"
import { CircleCheck } from "lucide-react"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormFieldContainer,
} from "@/components/primitives/form"
import { HelpTextMessage, HelpTextProvider, HelpTextToggle } from "../help-text"
import { IconSlot } from "@/components/primitives/icon-slot"
import { Input } from "@/components/primitives/input"

export function TextField<
  TFieldValues extends FieldValues,
  TValue extends string,
>({
  fieldPath,
  control,
  leadIcon,
  tailIcon,
  label,
  description,
  isOptional,
  helpText,
  ...inputProps
}: ControlledTextFieldProps<TFieldValues, TValue>) {
  return (
    <FormField
      control={control}
      name={fieldPath}
      render={({ field, isSuccess }) => (
        <FormItem>
          <HelpTextProvider>
            {helpText && <HelpTextToggle />}
            <FormFieldContainer>
              <IconSlot className="text-success-600">
                {isSuccess ? <CircleCheck /> : leadIcon}
              </IconSlot>
              <FormLabel optional={isOptional}>{label}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ""}
                  placeholder=" "
                  {...inputProps}
                />
              </FormControl>
              {tailIcon && (
                <IconSlot className="text-success-600">{tailIcon}</IconSlot>
              )}
            </FormFieldContainer>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
            <HelpTextMessage>{helpText}</HelpTextMessage>
          </HelpTextProvider>
        </FormItem>
      )}
    />
  )
}
