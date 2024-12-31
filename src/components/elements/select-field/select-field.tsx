import { FieldValues } from "react-hook-form"

import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  FormFieldContainer,
} from "@/components/primitives/form"
import { HelpTextMessage, HelpTextProvider, HelpTextToggle } from "../help-text"
import { IconSlot } from "@/components/primitives/icon-slot"
import { ChevronDown, CircleCheck } from "lucide-react"
import { ControlledSelectFieldProps } from "./select-field.types"
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/primitives/select"
import { ListBox, ListBoxItem } from "@/components/primitives/list-box"
import { Popover } from "react-aria-components"
import type { Key } from "react-aria-components"
import { Label } from "@/components/primitives/label"

export function SelectField<
  TFieldValues extends FieldValues,
  TValue extends string | number | undefined,
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
  const onSelectionChange = (
    key: Key,
    onChange: (...event: unknown[]) => void,
    onBlur: () => void,
  ) => {
    const selectedOption = options.find((o) => o.id === key)

    if (selectedOption) {
      onChange(selectedOption.value)
      onBlur()
    }
  }

  return (
    <FormField
      control={control}
      name={fieldPath}
      render={({ field, isSuccess, isError }) => (
        <FormItem>
          <HelpTextProvider>
            {helpText && <HelpTextToggle />}
            <Select
              onSelectionChange={(key) =>
                onSelectionChange(key, field.onChange, field.onBlur)
              }
              placeholder={placeholder}
              onOpenChange={(val) => {
                if (!val) {
                  field.onBlur()
                }
              }}
            >
              <FormFieldContainer>
                {isSuccess ? (
                  <IconSlot className="text-success-600">
                    <CircleCheck />
                  </IconSlot>
                ) : (
                  <IconSlot className="text-neutral-700">{leadIcon}</IconSlot>
                )}

                <Label optional={isOptional}>{label}</Label>
                <SelectTrigger data-success={isSuccess} data-error={isError}>
                  <SelectValue />
                </SelectTrigger>
                <IconSlot className="text-neutral-700">
                  <ChevronDown />
                </IconSlot>
              </FormFieldContainer>
              <Popover className="w-[var(--trigger-width)]">
                <ListBox aria-label={`${label} Options`} items={options}>
                  {(item) => <ListBoxItem key={item.id} item={item} />}
                </ListBox>
              </Popover>
            </Select>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
            <HelpTextMessage>{helpText}</HelpTextMessage>
          </HelpTextProvider>
        </FormItem>
      )}
    />
  )
}
