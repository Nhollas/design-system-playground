"use client"
import { PageContainer } from "@/components/page-container"
import { Form } from "@/components/primitives/form"
import { RadioGroup, RadioItem } from "@/components/primitives/radio"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  favoriteSport: z.string().nonempty("Please select your favorite sport."),
})

export default function RadioPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
    defaultValues: {
      favoriteSport: "",
    },
  })

  return (
    <PageContainer>
      <Form {...form}>
        <RadioGroup label="Favorite sport">
          <RadioItem value="soccer">Soccer</RadioItem>
          <RadioItem value="baseball">Baseball</RadioItem>
          <RadioItem value="basketball">Basketball</RadioItem>
        </RadioGroup>
      </Form>
    </PageContainer>
  )
}
