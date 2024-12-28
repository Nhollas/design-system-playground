import {
  ListBox as ReactAriaListBox,
  ListBoxItem as ReactAriaListBoxItem,
  ListBoxItemProps,
  type ListBoxProps,
} from "react-aria-components"
import Text from "./text"

export function ListBox<T extends object>({
  children,
  ...props
}: ListBoxProps<T>) {
  return (
    <ReactAriaListBox
      {...props}
      className="max-h-256 overflow-y-scroll p-4 space-y-2 py-8 rounded-8 border border-neutral-200 bg-neutral-0"
    >
      {children}
    </ReactAriaListBox>
  )
}

export function ListBoxItem(props: ListBoxItemProps) {
  return (
    <ReactAriaListBoxItem
      {...props}
      className="flex w-full justify-between cursor-default select-none items-center rounded-8 p-8 text-16 outline-none data-[focused]:bg-neutral-50 data-[focus-visible]:ring-2 ring-neutral-200 data-[focused]:text-neutral-900 data-[focus-visible]:text-neutral-900 text-neutral-700 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 aria-selected:text-neutral-900 hover:bg-neutral-50 hover:text-neutral-900"
    />
  )
}

export function ListBoxEmpty({ children }: { children: React.ReactNode }) {
  return <Text.Paragraph className="px-8 py-4">{children}</Text.Paragraph>
}

export function ListBoxLoading({ children }: { children: React.ReactNode }) {
  return <Text.Paragraph className="px-8 py-4">{children}</Text.Paragraph>
}

export interface ListBoxOption<TValue extends string | number = string> {
  value: TValue
  label: string
  id: string
}

export function createListBoxOptions<TValue extends string | number = string>(
  items: Array<Omit<ListBoxOption<TValue>, "id">>,
): ListBoxOption<TValue>[] {
  return items.map((item) => ({
    ...item,
    id: crypto.randomUUID(),
  }))
}
