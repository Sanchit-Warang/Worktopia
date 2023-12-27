'use client'

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Textarea,
  ScrollShadow,
} from '@nextui-org/react'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useSeekerRegistrationMutation } from '@/redux/features/auth/authApiSlice'
import { SeekerRegistrationFromValues, RootState } from '@/types/types'

const SeekerRegistrationForm = () => {
  const router = useRouter()

  

  const [seekerRegistration] = useSeekerRegistrationMutation()
  // const dispatch = useDispatch()
  // formik start
  const validate = (values: SeekerRegistrationFromValues) => {}
  const onSubmit = async (
    values: SeekerRegistrationFromValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log({
      ...values,
      skill: ['java', 'dsa'],
      resume: 'https://www.netflix.com/in/',
    })
    try {
      await seekerRegistration({
        ...values,
        skills: ['java', 'dsa'],
        resume: 'https://www.netflix.com/in/',
      }).unwrap()
      router.replace('/seeker-login')
    } catch (err) {
      console.log(err)
    }
    setSubmitting(false)
  }
  //formik end

  return (
    <Card className="max-w-[80vw] m-auto bg-opacity-50">
      <CardHeader>
        <center>Seeker Registration</center>
      </CardHeader>
      <ScrollShadow className="h-[80vh]">
        <CardBody>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              firstname: '',
              lastname: '',
              description: '',
              no_of_years_experience: 1,
              phone_number: '',
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
                    name="firstname"
                    label="First Name"
                    placeholder="Enter your first Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    onClear={() => (values.firstname = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isRequired
                    isClearable
                    type="text"
                    name="lastname"
                    label="Last Name"
                    placeholder="Enter your last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    onClear={() => (values.lastname = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Textarea
                    isRequired
                    // isClearable
                    type="text"
                    name="description"
                    label="Description"
                    placeholder="Enter concise description about yourself"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    // onClear={() => (values.password = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isRequired
                    // isClearable
                    type="number"
                    name="no_of_years_experience"
                    label="Years of Experience"
                    placeholder="1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.no_of_years_experience.toString()}
                    // onClear={() => (values.no_of_years_experience = )}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-5">
                  <Input
                    isClearable
                    isRequired
                    type="text"
                    name="phone_number"
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone_number}
                    onClear={() => (values.phone_number = '')}
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

export default SeekerRegistrationForm
