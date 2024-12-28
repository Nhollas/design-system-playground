"use client"

import { FormProvider } from "react-hook-form"
import { FormControl } from "./form-control"
import { FormDescription } from "./form-description"
import { FormField } from "./form-field"
import { FormItem } from "./form-item"
import { FormLabel } from "./form-label"
import { FormMessage } from "./form-message"
import { useFormField } from "./use-form-field"

const Form = FormProvider

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
}
