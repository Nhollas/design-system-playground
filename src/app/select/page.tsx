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
  favoriteColor: z.string().nonempty("Please select your favorite color."),
  country: z.string().nonempty("Please select your country."),
  preferredTime: z.string().nonempty("Please select your preferred time."),
  hobby: z.string().nonempty("Please select your hobby.").optional(),
})

const colorOptions = createSelectOptions(["Red", "Blue", "Green", "Yellow"])
const countryOptions = createSelectOptions(["USA", "Canada", "UK", "Australia"])
const timeOptions = createSelectOptions([
  "Morning",
  "Afternoon",
  "Evening",
  "Night",
])
const hobbyOptions = createSelectOptions([
  "Reading",
  "Traveling",
  "Cooking",
  "Gaming",
])

export default function SelectPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
    defaultValues: {
      favoriteColor: "",
      country: "",
      preferredTime: "",
      hobby: "",
    },
  })

  return (
    <PageContainer>
      <Form {...form}>
        <SelectField
          options={colorOptions}
          label="Favorite Color"
          control={form.control}
          fieldPath="favoriteColor"
          placeholder="Choose a color"
        />
        <SelectField
          options={countryOptions}
          label="Country"
          control={form.control}
          leadIcon={<Clock />}
          fieldPath="country"
          placeholder="Choose a country"
        />
        <SelectField
          options={timeOptions}
          label="Preferred Time"
          control={form.control}
          fieldPath="preferredTime"
          placeholder="Choose a time"
        />
        <SelectField
          options={hobbyOptions}
          label="Hobby"
          isOptional
          description="Select your favorite hobby."
          leadIcon={<Clock />}
          control={form.control}
          fieldPath="hobby"
          placeholder="Choose a hobby"
          helpText="This is a help text message."
        />
      </Form>
    </PageContainer>
  )
}
