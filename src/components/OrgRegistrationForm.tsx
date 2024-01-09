'use client'
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  ScrollShadow,
  Button,
  Textarea,
  Avatar,
} from '@nextui-org/react'
import { Formik } from 'formik'
import { useOrgRegistrationMutation } from '@/redux/features/auth/authApiSlice'
import { OrgRegistrationFromValues } from '@/types/types'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import formDataConvert from '@/utils/formDataConvert'

const OrgRegistrationForm = () => {
  const router = useRouter()
  const [orgRegistration] = useOrgRegistrationMutation()

  // formik start
  const validate = (values: OrgRegistrationFromValues) => {
    // const errors: Partial<OrgRegistrationFromValues> = {};

    // // Validate username
    // if (!values.username.trim()) {
    //     errors.username = 'Username is required';
    // }

    // // Validate email
    // if (!values.email.trim()) {
    //     errors.email = 'Email is required';
    // } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    //     errors.email = 'Invalid email address';
    // }

    // // Validate password
    // if (!values.password.trim()) {
    //     errors.password = 'Password is required';
    // } else if (values.password.length < 6) {
    //     errors.password = 'Password must be at least 6 characters';
    // }

    // // Validate location
    // if (!values.location.trim()) {
    //     errors.location = 'Location is required';
    // }

    // // Validate name
    // if (!values.name.trim()) {
    //     errors.name = 'Name is required';
    // }

    // // Validate website
    // if (!values.website.trim()) {
    //     errors.website = 'Website is required';
    // } else if (!/^https?:\/\/\S+$/.test(values.website)) {
    //     errors.website = 'Invalid website URL';
    // }

    // // Validate overview
    // if (!values.overview.trim()) {
    //     errors.overview = 'Overview is required';
    // }

    // // Validate founded_at
    // if (!values.founded_at.trim()) {
    //     errors.founded_at = 'Founded at is required';
    // } else if (!/^\d{4}$/.test(values.founded_at)) {
    //     errors.founded_at = 'Invalid format (e.g., 2020)';
    // } else {
    //     const currentYear = new Date().getFullYear();
    //     const foundedYear = parseInt(values.founded_at, 10);
    //     if (foundedYear > currentYear) {
    //         errors.founded_at = `Founded year should not be greater than ${currentYear}`;
    //     }
    // }

    // return errors;
  }
  const onSubmit = async (
    values: OrgRegistrationFromValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    // console.log(values)
    // const formData = formDataConvert({...values})
    // const iterator = formData.entries()
    // let nextEntry = iterator.next()

    // while (!nextEntry.done) {
    //   const [key, value] = nextEntry.value
    //   console.log(`${key}: ${value}`)
    //   nextEntry = iterator.next()
    // }
    try {
      await orgRegistration(values).unwrap()
      // console.log(temp)
      router.replace('/login')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(false)
  }
  //formik end
  return (
    <Card className="w-[90%] md:w-[50%] h-full m-auto bg-card-bg bg-opacity-50">
      <CardHeader>Fill the below form to create a Profile</CardHeader>
      <ScrollShadow className="h-[100%] scrollbar scrollbar-thumb-secondary scrollbar-thin scrollbar-track-primary-inactive">
        <CardBody>
          <Formik
            initialValues={{
              username: '',
              name: '',
              email: '',
              password: '',
              location: '',
              website: '',
              overview: '',
              founded_at: '',
              profile_pic: undefined,
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
              setFieldValue,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <Input
                    size="sm"
                    isRequired
                    isClearable
                    color="secondary"
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Name of the Organization"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    onClear={() => (values.name = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    size="sm"
                    isRequired
                    isClearable
                    color="secondary"
                    type="text"
                    name="username"
                    label="User Name"
                    placeholder="Grab a unique username for your company"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    onClear={() => (values.username = '')}
                    //   isInvalid={!!errors.email && touched.email}
                    //   errorMessage={errors.email}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    size="sm"
                    isRequired
                    isClearable
                    color="secondary"
                    type="email"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    onClear={() => (values.email = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    isRequired
                    size="sm"
                    isClearable
                    color="secondary"
                    type="password"
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    onClear={() => (values.password = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-3">
                  <Textarea
                    size="sm"
                    color="secondary"
                    isRequired
                    type="text"
                    name="overview"
                    label="Overview"
                    placeholder="Overview about your company"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.overview}
                    onClear={() => (values.overview = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    size="sm"
                    isRequired
                    isClearable
                    color="secondary"
                    type="text"
                    name="location"
                    label="Location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    onClear={() => (values.location = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>

                <div className="mb-3">
                  <Input
                    size="sm"
                    isClearable
                    color="secondary"
                    isRequired
                    type="text"
                    name="website"
                    label="Website"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                    onClear={() => (values.website = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>

                <div className="mb-3">
                  <Input
                    size="sm"
                    isClearable
                    color="secondary"
                    isRequired
                    type="text"
                    name="founded_at"
                    label="Founded At"
                    placeholder="Founding Year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.founded_at}
                    onClear={() => (values.founded_at = '')}
                    //   isInvalid={!!errors.password && touched.password}
                    //   errorMessage={errors.password}
                  />
                </div>
                <div className="mb-3 flex gap-4 items-center">
                  <Avatar
                    size="lg"
                    color="secondary"
                    isBordered
                    src={
                      values.profile_pic
                        ? URL.createObjectURL(values.profile_pic)
                        : ''
                    }
                  />
                  <div id="form" className="w-[60%]">
                    <Input
                      type="file"
                      color="secondary"
                      placeholder="optional"
                      id="imageInput"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file && file.type.startsWith('image/')) {
                          setFieldValue('profile_pic', file)
                        } else {
                          e.target.value = ''
                        }
                      }}
                    />
                  </div>
                  {values.profile_pic && (
                    <div>
                      <Button
                        isIconOnly
                        color="danger"
                        onClick={() => {
                          setFieldValue('profile_pic', undefined)
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                  )}
                </div>
                <div>
                  <center>
                    <Button
                      size="sm"
                      color="secondary"
                      variant="shadow"
                      type="submit"
                      isDisabled={isSubmitting}
                      isLoading={isSubmitting}
                    >
                      Sign Up
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
