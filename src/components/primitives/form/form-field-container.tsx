/*
Tailwind Play: https://play.tailwindcss.com/Dhj7F9RiEF
*/

import { cn } from "@/lib/utils"

export function FormFieldContainer({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        // Default styles
        "grid grid-cols-[var(--spacing-40)_0.5fr_0.5fr_var(--spacing-40)]",
        // Default Icon styles
        "**:data-[slot=icon]:z-20",
        "**:data-[slot=icon]:row-start-1",
        "**:data-[slot=icon]:place-self-center",
        "**:data-[slot=icon]:pointer-events-none",
        // Apply styles to First Icon
        "**:first:data-[slot=icon]:col-start-1",
        // Apply styles to Last Icon
        "**:last:data-[slot=icon]:col-start-4",
        // Default Control styles
        "**:data-[slot=control]:col-span-4",
        "**:data-[slot=control]:p-12",
        "**:data-[slot=control]:col-start-1",
        "**:data-[slot=control]:row-start-1",
        "**:data-[slot=control]:rounded-8",
        "**:data-[slot=control]:outline-none",
        // Apply styles to Control when Icon is present
        "has-[[data-slot=icon]+[data-slot=label]]:**:data-[slot=control]:pl-40",
        // Apply styles to Control when there is Icon after Control
        "has-[[data-slot=control]+[data-slot=icon]]:**:data-[slot=control]:pr-40",
        // Default Label styles
        "**:data-[slot=label]:z-10",
        "**:data-[slot=label]:row-start-1",
        "**:data-[slot=label]:col-span-4",
        "**:data-[slot=label]:col-start-1",
        "**:data-[slot=label]:transition-[translate,padding]",
        "**:data-[slot=label]:ease-in-out",
        "**:data-[slot=label]:duration-[250ms]",
        "**:data-[slot=label]:p-12",
        // Default Label Text styles
        "**:data-[slot=label-text]:bg-neutral-0",
        "**:data-[slot=label-text]:rounded-8",
        "**:data-[slot=label-text]:transition-[flex-grow,padding,font-size]",
        "**:data-[slot=label-text]:ease-in-out",
        "**:data-[slot=label-text]:duration-[250ms]",
        "**:data-[slot=label-text]:delay-[50ms]",
        "**:data-[slot=label-text]:grow",
        // Apply disabled styles to Label Text when Control is disabled
        "has-[[data-slot=control]:disabled]:**:data-[slot=label-text]:bg-neutral-50",
        "has-[[data-slot=control]:disabled]:**:data-[slot=label-text]:text-neutral-700",
        // Apply disabled styles when Control is disabled
        "has-[[data-slot=control]:disabled]:pointer-events-none",
        // Apply styles to Label when Icon is present
        "has-[[data-slot=icon]+[data-slot=label]]:**:data-[slot=label]:pl-40",
        // Apply styles to Label when there is Icon after Control
        "has-[[data-slot=control]+[data-slot=icon]]:**:data-[slot=label]:pr-40",
        // Apply styles to Label when control doesn't have placeholder shown
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:!px-12",
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:-translate-y-[25px]",
        // Apply styles to Label Text when control doesn't have placeholder shown
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:px-12",
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:grow-0",
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:text-14",
        // Apply styles to Label when this element has focus within
        "focus-within:**:data-[slot=label]:!px-12",
        "focus-within:**:data-[slot=label]:-translate-y-[25px]",
        // Apply styles to Label Text when this element has focus within
        "focus-within:**:data-[slot=label-text]:px-12",
        "focus-within:**:data-[slot=label-text]:grow-0",
        "focus-within:**:data-[slot=label-text]:text-14",
        className,
      )}
      {...props}
    />
  )
}
