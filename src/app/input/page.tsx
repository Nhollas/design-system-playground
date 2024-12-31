"use client"
import {
  Mail,
  User,
  Lock,
  Search,
  Phone,
  Info,
  Building,
  Briefcase,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form } from "@/components/primitives/form"
import { TextField } from "@/components/elements/text-field"
import { PageContainer } from "@/components/page-container"

const FormSchema = z.object({
  postcode: z.string(),
  email: z.string().email("Invalid email address"),
  username: z.string().nonempty("Username is required"),
  search: z.string().nonempty("Search field cannot be empty"),
  phone: z.string().nonempty("Phone number cannot be empty"),
  company: z.string().nonempty("Company name is required"),
  jobTitle: z.string().nonempty("Job title is required"),
  notes: z.string().max(50, "Notes cannot exceed 50 characters"),
})

export default function InputPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
    defaultValues: {
      postcode: "",
      email: "",
      username: "",
      search: "",
      phone: "",
      company: "",
      jobTitle: "",
      notes: "",
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
            label="Postcode"
            control={form.control}
            fieldPath="postcode"
            placeholder="Enter your postcode"
            leadIcon={<Lock />}
            description="This input field cannot be edited"
            disabled
          />
          <TextField
            label="Email Address"
            control={form.control}
            fieldPath="email"
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
            fieldPath="search"
            placeholder="Type to search..."
            leadIcon={<Search />}
          />
          <TextField
            label="Phone Number"
            control={form.control}
            fieldPath="phone"
            placeholder="+1 (555) 000-0000"
            leadIcon={<Phone />}
            description="Enter your contact number"
          />
          <TextField
            label="Company Name"
            control={form.control}
            fieldPath="company"
            placeholder="Enter company name"
            leadIcon={<Building />}
            description="Enter your company's legal name"
          />
          <TextField
            label="Job Title"
            control={form.control}
            fieldPath="jobTitle"
            placeholder="Enter job title"
            leadIcon={<Briefcase />}
            description="Your current role or position"
          />
          <TextField
            label="Notes"
            control={form.control}
            fieldPath="notes"
            placeholder="Add any additional information"
            tailIcon={<Info />}
            description="Additional context or comments"
            helpText="Maximum 50 characters"
          />
        </form>
      </Form>
    </PageContainer>
  )
}
