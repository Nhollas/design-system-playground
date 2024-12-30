"use client"
import {
  Clock,
  Mail,
  User,
  Lock,
  Search,
  Phone,
  Info,
  Calendar,
} from "lucide-react"
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
        <form
          onSubmit={form.handleSubmit((data) => console.log(data))}
          className="col-span-1 desktop:col-span-2 flex flex-col gap-16"
        >
          <TextField
            label="Disabled Input"
            control={form.control}
            fieldPath="username"
            placeholder="This field is disabled"
            leadIcon={<Lock />}
            description="This input field cannot be edited"
            disabled
          />
          <TextField
            label="Email Address"
            control={form.control}
            fieldPath="username"
            placeholder="Enter your email"
            leadIcon={<Mail />}
            description="We'll never share your email"
            helpText="Format: example@domain.com"
          />
          <TextField
            label="Username"
            isOptional
            control={form.control}
            fieldPath="username"
            placeholder="Choose a username"
            leadIcon={<User />}
            description="Pick a unique username"
            helpText="Must be at least 2 characters"
          />
          <TextField
            label="Search"
            control={form.control}
            fieldPath="username"
            placeholder="Type to search..."
            leadIcon={<Search />}
          />
          <TextField
            label="Phone Number"
            control={form.control}
            fieldPath="username"
            placeholder="+1 (555) 000-0000"
            leadIcon={<Phone />}
            description="Enter your contact number"
          />
          <TextField
            label="Date"
            control={form.control}
            fieldPath="username"
            placeholder="Select a date"
            tailIcon={<Calendar />}
            description="Choose your preferred date"
          />
          <TextField
            label="Appointment Time"
            control={form.control}
            fieldPath="username"
            placeholder="Select time"
            tailIcon={<Clock />}
            description="Pick a suitable time slot"
          />
          <TextField
            label="Notes"
            control={form.control}
            fieldPath="username"
            placeholder="Add any additional information"
            tailIcon={<Info />}
            description="Additional context or comments"
            helpText="Maximum 500 characters"
          />
        </form>
      </Form>
    </PageContainer>
  )
}
