import { ListBoxOption } from "@/components/primitives/list-box"
import { useQuery } from "@tanstack/react-query"

export function useAutocompleteQuery(
  term: string,
  queryKey: string,
  defaultOptions?: ListBoxOption[],
  queryFn?: (term: string) => Promise<ListBoxOption[]>,
) {
  const query = useQuery({
    queryKey: ["autocompleteQuery", queryKey],
    queryFn: () => queryFn?.(term),
    enabled: !!queryFn,
    initialData: defaultOptions,
  })

  return {
    ...query,
  }
}
