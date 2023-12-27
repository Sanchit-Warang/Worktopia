import { useSelector } from 'react-redux'
import { RootState } from '@/types/types'
import { useRouter } from 'next/navigation'


const useUserCheck = () => {
  const router = useRouter()
  //redirect if user is already logged in
  const user = useSelector((state: RootState) => {
    if (state.auth.user) {
      return state.auth.user
    } else {
      return null
    }
  })
  if (user) {
    router.replace('/')
  }
}

export default useUserCheck
