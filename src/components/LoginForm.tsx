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
import { useLoginMutation } from '@/redux/features/auth/authApiSlice'
import { setCredentials } from '@/redux/features/auth/authSlice'

import { LoginFormValues } from '@/types/types'



const validate = (values: LoginFormValues) => {
  const errors: Partial<LoginFormValues> = {}
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  // if (!values.password) {
  //   errors.password = 'Required'
  // } else if (values.password.length < 8) {
  //   errors.password = 'Must be 8 characters or more'
  // }
  return errors
}

const LoginForm = () => {
  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const userData = await login(values).unwrap()
    console.log(userData)
    dispatch(
      setCredentials({
        user: null,
        accessToken: userData.access,
        refreshToken: userData.refresh,
      })
    )
    setSubmitting(false)
  }

  return (
    <Card isBlurred className="max-w-[500px] m-auto">
      <CardHeader>Login Form</CardHeader>
      <Divider />
      <CardBody>
        <Formik
          initialValues={{ username: 'link@gmail.com', password: 'link' }}
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
                  name="username"
                  label="username"
                  placeholder="Enter your User Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  onClear={() => (values.username = '')}
                  isInvalid={!!errors.username && touched.username}
                  errorMessage={errors.username}
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
