"use client"
import { Briefcase, Building2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form } from "@/components/primitives/form"
import { AutocompleteTextField } from "@/components/elements/autocomplete-text-field"
import { PageContainer } from "@/components/page-container"
import { createListBoxOptions } from "@/components/primitives/list-box"

const FormSchema = z.object({
  occupation: z.string().nonempty("Occupation is required."),
  industry: z.string().nonempty("Industry is required."),
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
    defaultValues: {
      occupation: "",
      industry: "",
    },
  })

  return (
    <PageContainer>
      <Form {...form}>
        <AutocompleteTextField
          label="Occupation"
          control={form.control}
          fieldPath="occupation"
          placeholder="Really Long Placeholder Text"
          tailIcon={<Briefcase />}
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
          tailIcon={<Building2 />}
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
