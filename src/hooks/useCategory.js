import { useEffect, useState, useCallback } from "react"
import qs from "query-string"

export function useCategory() {
  const [category, setCategory] = useState("All")

  const selectCategory = ({ target }) => {
    setCategory(target.value)

    window.history.pushState("", "", `?category=${target.value}`)
  }

  useEffect(() => {
    const query = qs.parse(window.location.search)

    if (query["category"]) setCategory(query.category)
  }, [])

  return [category, selectCategory]
}
