import { FieldValues } from "react-hook-form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primitives/select"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/primitives/form"
import { HelpTextMessage, HelpTextProvider, HelpTextToggle } from "../help-text"
import { IconSlot } from "@/components/primitives/icon-slot"
import { ChevronDown, CircleCheck } from "lucide-react"
import { InputGroup } from "@/components/primitives/input-group"
import { ControlledSelectFieldProps } from "./select-field.types"

export function SelectField<
  TFieldValues extends FieldValues,
  TValue extends string | number,
>({
  fieldPath,
  description,
  control,
  helpText,
  options,
  placeholder,
  leadIcon,
  isOptional,
  label,
}: ControlledSelectFieldProps<TFieldValues, TValue>) {
  return (
    <FormField
      control={control}
      name={fieldPath}
      render={({ field, isSuccess }) => (
        <FormItem>
          <HelpTextProvider>
            {helpText && <HelpTextToggle />}
            <InputGroup>
              <IconSlot className="text-success-600">
                {isSuccess ? <CircleCheck /> : leadIcon}
              </IconSlot>
              <FormLabel optional={isOptional}>{label}</FormLabel>
              <Select
                onValueChange={(val) => {
                  field.onChange(val)
                  field.onBlur()
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <IconSlot className="text-neutral-700">
                <ChevronDown />
              </IconSlot>
            </InputGroup>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
            <HelpTextMessage>{helpText}</HelpTextMessage>
          </HelpTextProvider>
        </FormItem>
      )}
    />
  )
}
