"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form } from "@/components/primitives/form"
import { SelectField } from "@/components/elements/select-field/select-field"
import { Clock } from "lucide-react"
import { PageContainer } from "@/components/page-container"
import { createSelectOptions } from "@/components/elements/select-field/utils"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function SelectPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
    },
  })

  const options = createSelectOptions(
    Array.from({ length: 20 }, (_, i) => `Item ${i}`),
  )

  return (
    <PageContainer>
      <Form {...form}>
        <SelectField
          options={options}
          label="Text Field"
          control={form.control}
          fieldPath="username"
          placeholder="Choose an item"
        />
        <SelectField
          options={options}
          label="Text Field"
          control={form.control}
          leadIcon={<Clock />}
          fieldPath="username"
          placeholder="Choose an item"
        />
        <SelectField
          options={options}
          label="Text Field"
          control={form.control}
          fieldPath="username"
          placeholder="Choose an item"
        />
        <SelectField
          options={options}
          label="Text Field"
          isOptional
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          leadIcon={<Clock />}
          control={form.control}
          fieldPath="username"
          placeholder="Choose an item"
          helpText="This is a help text message."
        />
      </Form>
    </PageContainer>
  )
}
