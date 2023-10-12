'use client'
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  ScrollShadow,
  Button,
} from '@nextui-org/react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { useOrgRegistrationMutation } from '@/redux/features/auth/authApiSlice'
import { OrgRegistrationFromValues, RootState } from '@/types/types'
import { useRouter } from 'next/navigation'

const OrgRegistrationForm = () => {
  const router = useRouter()
  const [orgRegistration] = useOrgRegistrationMutation()
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

  // formik start
  const validate = (values: OrgRegistrationFromValues) => {}
  const onSubmit = async (
    values: OrgRegistrationFromValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values)
    try {
      await orgRegistration(values).unwrap()
      router.replace('/organization-login')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(false)
  }
  //formik end
  return (
    <Card className="max-w-[80vw] m-auto bg-opacity-60">
      <CardHeader>
        <center>Organization Registration</center>
      </CardHeader>
      <ScrollShadow className="h-[80vh]">
        <CardBody>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              location: '',
              name: '',
              website: '',
              overview: '',
              founded_at: '',
            }}
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
                    type="text"
                    name="username"
                    label="User Name"
                    placeholder="Enter your User Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    onClear={() => (values.username = '')}
                    //   isInvalid={!!errors.email && touched.email}
                    //   errorMessage={errors.email}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isRequired
                    isClearable
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    onClear={() => (values.email = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isRequired
                    isClearable
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter your Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    onClear={() => (values.password = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isRequired
                    isClearable
                    type="text"
                    name="location"
                    label="Location"
                    placeholder="Enter the Location of your Organization"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    onClear={() => (values.location = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isRequired
                    isClearable
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Enter your organization Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    onClear={() => (values.name = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isClearable
                    isRequired
                    type="text"
                    name="website"
                    label="Website"
                    placeholder="Enter your Website url"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                    onClear={() => (values.website = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isClearable
                    isRequired
                    type="text"
                    name="overview"
                    label="Overview"
                    placeholder="Enter your Organization Overview"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.overview}
                    onClear={() => (values.overview = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isClearable
                    isRequired
                    type="text"
                    name="founded_at"
                    label="Founded At"
                    placeholder="Enter Organization Founding Year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.founded_at}
                    onClear={() => (values.founded_at = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
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
      </ScrollShadow>
    </Card>
  )
}

export default OrgRegistrationForm
