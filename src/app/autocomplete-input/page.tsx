"use client"
import { Clock } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form } from "@/components/primitives/form"
import { AutocompleteTextField } from "@/components/elements/autocomplete-text-field"
import { PageContainer } from "@/components/page-container"
import { createListBoxOptions } from "@/components/primitives/list-box"

const FormSchema = z.object({
  occupation: z.string({ required_error: "Occupation is required." }).min(1),
  industry: z.string({ required_error: "Industry is required." }).min(1),
})

const listBoxItems = createListBoxOptions(
  Array.from({ length: 20 }, (_, i) => ({
    label: `Item ${i + 1}`,
    value: `Item ${i + 1}`,
  })),
)

export default function AutocompleteInputPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
  })

  return (
    <PageContainer>
      <Form {...form}>
        <AutocompleteTextField
          label="Occupation"
          control={form.control}
          fieldPath="occupation"
          placeholder="Placeholder"
          tailIcon={<Clock />}
          description="This is a description."
          helpText="This is help text."
          options={listBoxItems}
          getOptionValue={(option) => option.value}
          getDisplayValue={(option) => option.label}
        />
        <AutocompleteTextField
          label="Industry"
          control={form.control}
          fieldPath="industry"
          placeholder="Placeholder"
          tailIcon={<Clock />}
          description="This is a description."
          helpText="This is help text."
          options={listBoxItems}
          getOptionValue={(option) => option.value}
          getDisplayValue={(option) => option.label}
        />
      </Form>
    </PageContainer>
  )
}
