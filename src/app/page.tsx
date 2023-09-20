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

interface FormValues {
  email: string
  password: string
}

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more'
  }
  return errors
}

const onSubmit = (
  values: FormValues,
  { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

export default function Page() {
  return (
    <div className="h-[100vh]">
      <Card isBlurred className="max-w-[400px] m-auto">
        <CardHeader>Login Form</CardHeader>
        <Divider />
        <CardBody>
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
                <div className='mb-5'>
                  <Input
                    isClearable
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    onClear={() => (values.email = '')}
                    isInvalid={!!errors.email && touched.email}
                    errorMessage={errors.email}
                  />
                  {/* {errors.email && touched.email && errors.email} */}
                </div>
                <div className='mb-5'>
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
    </div>
  )
}
