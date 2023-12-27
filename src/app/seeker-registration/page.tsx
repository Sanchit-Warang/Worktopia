'use client'

import SeekerRegistrationForm from "@/components/SeekerRegistrationForm"
import { WithoutAuth } from "@/components/HOC/WithoutAuth"
const page = () => {
  return (
    <div className="m-auto mt-6">
        <SeekerRegistrationForm/>
    </div>
  )
}

export default WithoutAuth(page)