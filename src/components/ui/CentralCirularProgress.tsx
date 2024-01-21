'use client'

import { CircularProgress } from '@nextui-org/react'

const CentralCirularProgress = () => {
  return (
    <div className="h-[100%] w-full flex justify-center items-center">
      <CircularProgress label="Free hosting may require some time" />
    </div>
  )
}

export default CentralCirularProgress
