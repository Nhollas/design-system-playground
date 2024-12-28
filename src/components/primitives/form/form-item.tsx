import { useId } from "react"
import { FormItemContext } from "./form-item-context"
import { cn } from "@/lib/utils"

export const FormItem: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("flex flex-col gap-y-8", className)} {...props} />
    </FormItemContext.Provider>
  )
}
