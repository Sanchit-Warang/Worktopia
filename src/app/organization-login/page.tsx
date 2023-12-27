'use client'
import LoginForm from "@/components/LoginForm"
import { WithoutAuth } from "@/components/HOC/WithoutAuth"
const page = () => {
  return (
    <div className="m-auto mt-6">
      <LoginForm formType="organization"/>
    </div>
  )
}

export default WithoutAuth(page)