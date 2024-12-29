/*
Tailwind Play: https://play.tailwindcss.com/kpg7Bq5c8g

<html>
  <head>
    <title>Max-width animation example</title>
    <script src=https://cdn.tailwindcss.com"></script>
  </head>
  <body class="p-8">
    <div class="grid grid-cols-[0.5fr_0.5fr] bg-red-500/10 p-8 bg-red-500 gap-4 focus-within:**:data-[slot=label]:-translate-y-[22px] has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:-translate-y-[22px] has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:grow-0 focus-within:**:data-[slot=label-text]:grow-0 focus-within:**:data-[slot=label-text]:px-2 has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:px-2 has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:h-max focus-within:**:data-[slot=label]:h-max">
      <label data-slot="label" for="input-id" class="flex h-auto transition-[translate] ease-in-out duration-[250ms] row-start-1 col-start-1 col-span-2 z-10 items-center p-2">
        <span data-slot="label-text" class="h-full items-center flex grow bg-blue-200 transition-[flex-grow,padding] ease-in duration-[100ms]">Label Text</span>
      </label>
      <input id="input-id" data-slot="control" type="text" placeholder="" class="bg-orange-500 border p-2 row-start-1 col-start-1 col-span-2" />
    </div>
  </body>
</html>


*/

import { cn } from "@/lib/utils"

export function InputGroup({
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
        "**:data-[slot=label]:**:transition-[scale,transform,max-width]",
        "**:data-[slot=label]:**:delay-[150ms,0ms,150ms]",
        "**:data-[slot=label]:ease-in-out",
        "**:data-[slot=label]:duration-[250ms,500ms,250ms]",
        "**:data-[slot=label]:p-12",
        "**:data-[slot=label]:z-10",
        "**:data-[slot=label]:h-auto",
        "**:data-[slot=label]:row-start-1",
        "**:data-[slot=label]:col-span-4",
        "**:data-[slot=label]:col-start-1",
        "**:data-[slot=label]:w-full",
        // Default Label Text styles
        "**:data-[slot=label-text]:w-full",
        "**:data-[slot=label-text]:max-w-[calc(100%-2px)]",
        // Apply styles to Label when Icon is present
        "has-[[data-slot=icon]+[data-slot=label]]:**:data-[slot=label]:pl-40",
        // Apply styles to Label when there is Icon after Control
        "has-[[data-slot=control]+[data-slot=icon]]:**:data-[slot=label]:pr-40",
        // Apply styles to Label when control doesn't have placeholder shown
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:-translate-y-[14px]",
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:!px-12",
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:text-14",
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:px-4",
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:py-4",
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label]:h-max",
        // Apply styles to Label Text when control doesn't have placeholder shown
        "has-[[data-slot=control]:not(:placeholder-shown)]:**:data-[slot=label-text]:max-w-0",
        // Apply styles to Label when this element has focus within
        "focus-within:**:data-[slot=label]:-translate-y-[14px]",
        "focus-within:**:data-[slot=label]:!px-12",
        "focus-within:**:data-[slot=label]:text-14",
        "focus-within:**:data-[slot=label-text]:px-4",
        "focus-within:**:data-[slot=label]:py-4",
        "focus-within:**:data-[slot=label]:h-max",
        // Apply styles to Label Text when this element has focus within
        "focus-within:**:data-[slot=label-text]:max-w-0",
        className,
      )}
      {...props}
    />
  )
}
