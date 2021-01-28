import React, { useMemo } from "react"
import { Radio } from "antd"

export const Category = ({ categories, category, selectCategory }) => {
  const test = useMemo(() => (
    <>
      {console.log(11)}
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
  return <> {test} </>
}
