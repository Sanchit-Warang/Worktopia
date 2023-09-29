'use client'
import { Formik } from 'formik'
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button,
} from '@nextui-org/react'

import { useDispatch } from 'react-redux'
import { useSeekerLoginMutation } from '@/redux/features/auth/authApiSlice'
import { setCredentials } from '@/redux/features/auth/authSlice'

import { LoginFormValues } from '@/types/types'



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
  formType : 'seeker' | 'organization'
}

const LoginForm = ({formType}: Props) => {
  const dispatch = useDispatch()
  const [seekerLogin, { isLoading }] = useSeekerLoginMutation()

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values)
    const userData = await seekerLogin(values).unwrap()
    console.log(userData)
    dispatch(
      setCredentials({
        user: userData.user,
        accessToken: userData.access,
        refreshToken: userData.refresh,
      })
    )
    setSubmitting(false)
  }

  return (
    <Card className="max-w-[500px] m-auto">
      <CardHeader>{ formType === 'seeker' ? 'Seeker' : 'Organization' } Login Form</CardHeader>
      <Divider />
      <CardBody>
        <Formik
          initialValues={{ email: 'link@gmail.com', password: 'link' }}
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
                  isClearable
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Enter your User Name"
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
                  isClearable
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Enter your Password"
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
                    color="primary"
                    variant="shadow"
                    type="submit"
                    isDisabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </center>
              </div>
            </form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default LoginForm
