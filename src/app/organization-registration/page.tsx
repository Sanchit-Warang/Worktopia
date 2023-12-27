'use client'

import OrgRegistrationForm from "@/components/OrgRegistrationForm"
import { WithoutAuth } from "@/components/HOC/WithoutAuth"
const page = () => {
  return (
    <div className="m-auto mt-6">
        <OrgRegistrationForm/>
    </div>
  )
}

export default WithoutAuth(page)