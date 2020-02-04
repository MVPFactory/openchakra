import React, { memo, useEffect } from 'react'
import { Select } from '@chakra-ui/core'
import FormControl from '../../controls/FormControl'
import { useForm } from '../../../../hooks/useForm'
import usePropsSelector from '../../../../hooks/usePropsSelector'

const FlexPanel = () => {
  const { setValueFromEvent, setValue } = useForm()

  const alignItems = usePropsSelector('alignItems')
  const flexDirection = usePropsSelector('flexDirection')
  const justifyContent = usePropsSelector('justifyContent')

  useEffect(() => {
    setValue('flexDirection', 'column')
    setValue('alignItems', 'flex-start')
    setValue('justifyContent', 'flex-start')
  }, [setValue])

  return (
    <>
      <FormControl label="Direction">
        <Select
          name="flexDirection"
          size="sm"
          value={flexDirection || ''}
          onChange={setValueFromEvent}
        >
          <option>column</option>
          <option>row</option>
        </Select>
      </FormControl>

      <FormControl label="Justify content">
        <Select
          name="justifyContent"
          size="sm"
          value={justifyContent || ''}
          onChange={setValueFromEvent}
        >
          <option>flex-start</option>
          <option>center</option>
          <option>flex-end</option>
          <option>space-between</option>
          <option>space-around</option>
        </Select>
      </FormControl>

      <FormControl label="Align items">
        <Select
          name="alignItems"
          size="sm"
          value={alignItems || ''}
          onChange={setValueFromEvent}
        >
          <option>flex-start</option>
          <option>center</option>
          <option>flex-end</option>
          <option>space-between</option>
          <option>space-around</option>
        </Select>
      </FormControl>
    </>
  )
}

export default memo(FlexPanel)