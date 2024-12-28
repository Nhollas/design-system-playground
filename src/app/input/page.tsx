"use client"
import { Clock } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form } from "@/components/primitives/form"
import { TextField } from "@/components/elements/text-field"
import { PageContainer } from "@/components/page-container"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function InputPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
    },
  })

  return (
    <PageContainer>
      <Form {...form}>
        <TextField
          label="Text Field"
          control={form.control}
          fieldPath="username"
          placeholder="Placeholder"
          leadIcon={<Clock />}
          tailIcon={<Clock />}
        />
        <TextField
          label="Text Field"
          isOptional
          control={form.control}
          fieldPath="username"
          placeholder="Placeholder"
          leadIcon={<Clock />}
          tailIcon={<Clock />}
        />
        <TextField
          label="Text Field"
          control={form.control}
          fieldPath="username"
          placeholder="Placeholder"
        />
        <TextField
          label="Text Field"
          control={form.control}
          fieldPath="username"
          placeholder="Placeholder"
          leadIcon={<Clock />}
        />
        <TextField
          label="Text Field"
          control={form.control}
          fieldPath="username"
          placeholder="Placeholder"
          tailIcon={<Clock />}
        />
        <TextField
          label="Text Field"
          control={form.control}
          fieldPath="username"
          placeholder="Placeholder"
          tailIcon={<Clock />}
          description="This is a description."
        />
        <TextField
          label="Text Field"
          control={form.control}
          fieldPath="username"
          placeholder="Placeholder"
          tailIcon={<Clock />}
          description="This is a description."
          helpText="This is help text."
        />
      </Form>
    </PageContainer>
  )
}
