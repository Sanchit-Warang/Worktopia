'use client'

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Textarea,
  ScrollShadow,
  Avatar,
} from '@nextui-org/react'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useSeekerRegistrationMutation } from '@/redux/features/auth/authApiSlice'
import { SeekerRegistrationFromValues } from '@/types/types'
import { useState } from 'react'
import Skills from './Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'

const SeekerRegistrationForm = () => {
  const router = useRouter()
  const [seekerRegistration] = useSeekerRegistrationMutation()
  // const [skills, setSkills] = useState<string[]>([])
  const [currentSkill, setCurrentSkill] = useState<string>('')

  // formik start
  const validate = (values: SeekerRegistrationFromValues) => {}
  const onSubmit = async (
    values: SeekerRegistrationFromValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    // console.log({
    //   ...values,
    //   no_of_years_experience: values.no_of_years_experience.toString(),
    // })
    // const formData = formDataConvert({
    //   ...values,
    //   no_of_years_experience: values.no_of_years_experience.toString(),
    // })
    // const iterator = formData.entries()
    // let nextEntry = iterator.next()

    // while (!nextEntry.done) {
    //   const [key, value] = nextEntry.value
    //   console.log(`${key}: ${value}`)
    //   nextEntry = iterator.next()
    // }
    try {
      await seekerRegistration({
        ...values,
        no_of_years_experience: values.no_of_years_experience.toString(),
      }).unwrap()
      router.replace('/login')
      toast.success('Registered successfully')
    } catch (err: any) {
      toast.error(err?.data?.error ?? 'Something went wrong')
    }
    setSubmitting(false)
  }
  //formik end

  return (
    <Card className="w-[90%] md:w-[50%] h-[75vh] m-auto bg-card-bg bg-opacity-50">
      <CardHeader>Fill the below form to create a Profile as seeker</CardHeader>
      <ScrollShadow className="h-[100%] scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive">
        <CardBody>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              firstname: '',
              lastname: '',
              description: '',
              no_of_years_experience: 0,
              skills: [],
              phone_number: '',
              profile_pic: undefined,
              resume: undefined,
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
              <>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <Input
                      isRequired
                      size="sm"
                      color="primary"
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
                  <div className="mb-3 grid gap-2 grid-cols-1 md:grid-cols-2">
                    <Input
                      isRequired
                      size="sm"
                      color="primary"
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
                    <Input
                      isRequired
                      size="sm"
                      color="primary"
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
                  <div className="mb-3">
                    <Input
                      isRequired
                      size="sm"
                      color="primary"
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
                  <div className="mb-3">
                    <Input
                      isRequired
                      size="sm"
                      color="primary"
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

                  <div className="mb-3">
                    <Textarea
                      isRequired
                      size="sm"
                      color="primary"
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
                  <div className="mb-3">
                    <Input
                      isRequired
                      size="sm"
                      color="primary"
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
                  <div className="mb-3">
                    <Input
                      isClearable
                      size="sm"
                      color="primary"
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
                  <div className="mb-3">
                    <Skills
                      skills={values.skills}
                      all={true}
                      allowDelay={false}
                      isDeletable={true}
                      handleDeleteSkill={(i: number) => {
                        const newSkills = values.skills.filter(
                          (_, ind) => ind !== i
                        )
                        setFieldValue('skills', newSkills)
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <Input
                      isClearable
                      size="sm"
                      color="primary"
                      type="text"
                      name="skills"
                      label="Skills"
                      value={currentSkill}
                      isDisabled={values.skills.length === 15}
                      onChange={(e) => {
                        setCurrentSkill(e.target.value)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && currentSkill.trim() !== '') {
                          e.preventDefault()
                          setFieldValue('skills', [
                            ...values.skills,
                            currentSkill,
                          ])
                          setCurrentSkill('')
                        }
                      }}
                      placeholder="Only upto 15 skills"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      // value={values.phone_number}
                      // onClear={() => (values.phone_number = '')}
                      //   isInvalid={!!errors.password && touched.password}
                      //   errorMessage={errors.password}
                    />
                  </div>
                  <div className="mb-3 flex gap-4 items-center">
                    <Avatar
                      size="lg"
                      color="primary"
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
                        color="primary"
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
                  <div className="mt-5 mb-3 flex flex-wrap gap-4 items-center">
                    <div id="form" className="w-[80%]">
                      <Input
                        type="file"
                        label="Resume"
                        color="primary"
                        placeholder="optional"
                        id="ResumeInput"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file && file.type === 'application/pdf') {
                            setFieldValue('resume', file)
                          } else {
                            e.target.value = ''
                          }
                        }}
                      />
                    </div>
                    {values.resume && (
                      <div>
                        <Button
                          isIconOnly
                          color="danger"
                          onClick={() => {
                            setFieldValue('resume', undefined)
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
                        color="primary"
                        variant="shadow"
                        type="submit"
                        isDisabled={isSubmitting}
                        isLoading={isSubmitting}
                      >
                        Sign up
                      </Button>
                    </center>
                  </div>
                </form>
              </>
            )}
          </Formik>
        </CardBody>
      </ScrollShadow>
    </Card>
  )
}

export default SeekerRegistrationForm
