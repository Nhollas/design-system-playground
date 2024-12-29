import { FieldValues } from "react-hook-form"
import { HelpTextProvider, HelpTextMessage, HelpTextToggle } from "../help-text"
import { CheckIcon, CircleCheck } from "lucide-react"
import { useState } from "react"
import { useDebounce } from "use-debounce"
import { ControlledAutocompleteTextFieldProps } from "./autocomplete-text-field.types"
import { useAutocompleteQuery } from "./use-autocomplete-query"
import {
  ListBox,
  ListBoxEmpty,
  ListBoxItem,
  ListBoxLoading,
} from "@/components/primitives/list-box"
import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/primitives/form"
import { IconSlot } from "@/components/primitives/icon-slot"
import { ComboBox, Text, Popover, Key } from "react-aria-components"
import { Input } from "@/components/primitives/input"
import { InputGroup } from "@/components/primitives/input-group"
import { Label } from "@/components/primitives/label"

export function AutocompleteTextField<
  TFieldValues extends FieldValues,
  TValue extends string | number,
>({
  fieldPath,
  control,
  leadIcon,
  tailIcon,
  label,
  description,
  helpText,
  options,
  queryFn,
  emptyText,
  loadingText,
  getOptionValue,
  getDisplayValue,
  isOptional,
  placeholder,
}: ControlledAutocompleteTextFieldProps<TFieldValues, TValue>) {
  const [fieldState, setFieldState] = useState<{
    selectedKey: Key | null
    inputValue: string
  }>({
    selectedKey: null,
    inputValue: "",
  })

  const [debouncedSearch] = useDebounce(fieldState.inputValue, 750)
  const queryKey = `${fieldPath}-${debouncedSearch}`
  const { data: optionSuggestions = [], isPending } = useAutocompleteQuery(
    debouncedSearch,
    queryKey,
    options,
    queryFn,
  )

  const onSelectionChange = (
    key: Key | null,
    onChange: (...event: unknown[]) => void,
    onBlur: () => void,
  ) => {
    const selectedOption = optionSuggestions.find((o) => o.id === key)

    if (selectedOption) {
      setFieldState({
        inputValue: getDisplayValue(selectedOption),
        selectedKey: selectedOption.id,
      })
      onChange(getOptionValue(selectedOption))
      onBlur()
    }
  }

  const onInputChange = (value: string) =>
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === "" ? null : prevState.selectedKey,
    }))

  return (
    <FormField
      control={control}
      name={fieldPath}
      render={({ field, isSuccess, isError }) => (
        <FormItem>
          <HelpTextProvider>
            {helpText && <HelpTextToggle />}
            <ComboBox
              selectedKey={fieldState.selectedKey}
              inputValue={fieldState.inputValue}
              allowsEmptyCollection
              onSelectionChange={(key) =>
                onSelectionChange(key, field.onChange, field.onBlur)
              }
              onBlur={field.onBlur}
              onInputChange={onInputChange}
            >
              <InputGroup>
                <IconSlot className="text-success-600">
                  {isSuccess ? <CircleCheck /> : leadIcon}
                </IconSlot>
                <Label optional={isOptional}>{label}</Label>
                <Input
                  placeholder={placeholder ?? " "}
                  isSuccess={isSuccess}
                  isError={isError}
                />
                {tailIcon && (
                  <IconSlot className="text-success-600">{tailIcon}</IconSlot>
                )}
              </InputGroup>
              <Popover className="w-[var(--trigger-width)]">
                <ListBox
                  aria-label={`${label} Options`}
                  items={optionSuggestions}
                  renderEmptyState={() =>
                    isPending ? (
                      <ListBoxLoading>
                        {loadingText ?? "Loading..."}
                      </ListBoxLoading>
                    ) : (
                      <ListBoxEmpty>
                        {emptyText ?? "No matching results found."}
                      </ListBoxEmpty>
                    )
                  }
                >
                  {(item) => (
                    <ListBoxItem key={item.id} textValue={item.label}>
                      {({ isSelected }) => (
                        <>
                          <Text slot="label">{getDisplayValue(item)}</Text>
                          {isSelected && (
                            <IconSlot>
                              <CheckIcon />
                            </IconSlot>
                          )}
                        </>
                      )}
                    </ListBoxItem>
                  )}
                </ListBox>
              </Popover>
            </ComboBox>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
            <HelpTextMessage>{helpText}</HelpTextMessage>
          </HelpTextProvider>
        </FormItem>
      )}
    />
  )
}
