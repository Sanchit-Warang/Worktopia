'use client'

import { Card, CardBody, Tabs, Tab } from '@nextui-org/react'
import LoginForm from './LoginForm'
import { useState } from 'react'

// type tab = {
//   id: number
//   label: 'seeker' | 'organization'
//   title: string
// }

// const tabs: tab[] = [
//   {
//     id: 1,
//     label: 'seeker',
//     title: 'Seeker',
//   },
//   {
//     id: 2,
//     label: 'organization',
//     title: 'Organization',
//   },
// ]

const LoginFormCard = () => {
  //   const [color, setColor] = useState<'primary' | 'secondary'>('primary')
  const [selected, setSelected] = useState<any>('1')
  return (
    <Card className="w-[90%] md:w-[50%] m-auto bg-opacity-50 bg-card-bg">
      <CardBody>
        <Tabs
          color={selected === '1' ? 'primary' : 'secondary'}
          aria-label="Login tabs"
          fullWidth
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="underlined"
        >
          <Tab key={'1'} title={'Seeker'}>
            <LoginForm formType="seeker" />
          </Tab>
          <Tab key={'2'} title={'Oragnization'}>
            <LoginForm formType="organization" />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  )
}

export default LoginFormCard
