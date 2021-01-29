import React, { useMemo } from "react"
import { Radio } from "antd"

export const Scroll = ({ categories, category, selectCategory }) => {
  const categoryList = useMemo(() => (
    <>
      <Radio.Group
        onChange={selectCategory}
        value={category}
        defaultValue="All"
      >
        <Radio.Button value="All">All</Radio.Button>
        {categories.group.map(({ fieldValue }) => (
          <Radio.Button value={fieldValue}>{fieldValue}</Radio.Button>
        ))}
      </Radio.Group>
    </>
  ))
  return <> {categoryList} </>
}
