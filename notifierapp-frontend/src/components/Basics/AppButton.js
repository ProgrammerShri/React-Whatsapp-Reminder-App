import { Button } from 'antd'
import React from 'react'

const AppButton = ({title="Submit", size="large"}) => {
  return (
    <div className='flex justify-center items-center m-2 w-full'>
      <Button size={size}  className='w-full p-auto rounded-3xl' type='primary'> {title} </Button>
    </div>
  )
}

export default AppButton