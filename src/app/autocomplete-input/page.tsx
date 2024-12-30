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

const occupationOptions = createListBoxOptions([
  { label: "Software Developer", value: "software-developer" },
  { label: "Data Analyst", value: "data-analyst" },
  { label: "Product Manager", value: "product-manager" },
  { label: "Project Manager", value: "project-manager" },
  { label: "UX Designer", value: "ux-designer" },
])
const industryOptions = createListBoxOptions([
  { label: "Technology", value: "technology" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Finance", value: "finance" },
  { label: "Education", value: "education" },
  { label: "Manufacturing", value: "manufacturing" },
])

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
          placeholder="Really Long Placeholder Text"
          tailIcon={<Clock />}
          description="Choose the job title that best fits your current role."
          helpText="E.g., software developer, project manager, etc."
          options={occupationOptions}
          getOptionValue={(option) => option.value}
          getDisplayValue={(option) => option.label}
        />
        <AutocompleteTextField
          label="Industry"
          control={form.control}
          fieldPath="industry"
          placeholder="Really Long Placeholder Text"
          tailIcon={<Clock />}
          description="Select the industry that best describes your organization."
          helpText="E.g., healthcare, finance, technology, etc."
          options={industryOptions}
          getOptionValue={(option) => option.value}
          getDisplayValue={(option) => option.label}
        />
      </Form>
    </PageContainer>
  )
}
