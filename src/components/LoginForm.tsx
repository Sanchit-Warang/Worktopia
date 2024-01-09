'use client'
import { Formik } from 'formik'
import { Input, Button } from '@nextui-org/react'
import { useAppDispatch } from '@/redux/hooks'
import {
  useSeekerLoginMutation,
  useOrgLoginMutation,
} from '@/redux/features/auth/authApiSlice'
import { setCredentials } from '@/redux/features/auth/authSlice'
import { redirect } from 'next/navigation'
import { LoginFormValues } from '@/types/types'
import Link from 'next/link'
import { apiSlice } from '@/redux/api/apiSlice'

const validate = (values: LoginFormValues) => {
  const errors: Partial<LoginFormValues> = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  // if (!values.password) {
  //   errors.password = 'Required'
  // } else if (values.password.length < 8) {
  //   errors.password = 'Must be 8 characters or more'
  // }
  return errors
}

type Props = {
  formType: 'seeker' | 'organization'
}

const LoginForm = ({ formType }: Props) => {
  const dispatch = useAppDispatch()
  const [seekerLogin] = useSeekerLoginMutation()
  const [orgLogin] = useOrgLoginMutation()

  const color = formType === 'seeker' ? 'primary' : 'secondary'

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values)
    let userData
    if (formType === 'seeker') {
      userData = await seekerLogin(values).unwrap()
    } else {
      userData = await orgLogin(values).unwrap()
    }
    console.log(userData)
    dispatch(
      setCredentials({
        user: userData.user,
        accessToken: userData.access,
        refreshToken: userData.refresh,
      })
    )
    dispatch(apiSlice.util.resetApiState())
    setSubmitting(false)
    redirect('/')
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              isRequired
              isClearable
              color={color}
              type="text"
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              onClear={() => (values.email = '')}
              isInvalid={!!errors.email && touched.email}
              errorMessage={errors.email}
            />
            {/* {errors.email && touched.email && errors.email} */}
          </div>
          <div className="mb-5">
            <Input
              isRequired
              isClearable
              type="password"
              name="password"
              label="Password"
              color={color}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              onClear={() => (values.password = '')}
              isInvalid={!!errors.password && touched.password}
              errorMessage={errors.password}
            />
            {/* {errors.password && touched.password && errors.password} */}
          </div>
          <div>
            <center>
              <Button
                color={color}
                size="sm"
                variant="shadow"
                type="submit"
                isDisabled={isSubmitting}
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </center>
            <div className="text-center pt-3">
              <Link
                href={`/signup/${
                  formType === 'organization' ? formType : 'user'
                }`}
                // href="/signup/user"
              >
                <p className="text-copy-light">
                  {' '}
                  {`Hey join as a ${formType} !`}{' '}
                </p>
              </Link>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default LoginForm
