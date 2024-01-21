'use client'
import { Card, CardBody, Input, Textarea, Button } from '@nextui-org/react'
import { Formik } from 'formik'
import { useState } from 'react'
import Skills from './Skills'
import { useCreateJobProfileMutation } from '@/redux/features/jobProfile/jobProfileApiSlice'
import { JobPostFormValues } from '@/types/types'
import { useRouter } from 'next/navigation'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import toast from 'react-hot-toast'

const validate = (values: JobPostFormValues) => {}

const JobPostForm = () => {
  const {user, userType} = useGetUserAndType()
  const router = useRouter()
  const [currentSkill, setCurrentSkill] = useState<string>('')
  const [createJob] = useCreateJobProfileMutation()
  const onSubmit = async (
    values: JobPostFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values)
    try {
      await createJob(values).unwrap()
      router.replace('/job-list')
      toast.success('Job Posted')
    } catch (error: any) {
      toast.error(error?.data?.error ?? 'Something went wrong')
    }
    setSubmitting(false)
  }
  return (
    <>
      <Card className="bg-card-bg bg-opacity-50">
        <CardBody>
          <Formik
            initialValues={{
              organization_id: user?.id ? user.id : 0,
              role: 'Full Stack Developer',
              description: 'We are currently seeking a skilled and motivated Full Stack Developer to join our team, bringing expertise in key technologies including React, Next.js, Redis, and Express. In this role, you will be responsible for the end-to-end development of web applications, focusing on both front-end and back-end components. On the front end, you will leverage React and Next.js to craft visually appealing and user-friendly interfaces, collaborating closely with UI/UX designers. Meanwhile, on the back end, you will employ Express to develop robust server-side logic and implement RESTful APIs for seamless communication between different parts of the application. Database management is a crucial aspect of the role, involving the use of Redis to design efficient and scalable data storage solutions. Integration of these components and performance optimization, including caching strategies, will be key to delivering high-quality, responsive applications. The successful candidate will demonstrate a strong commitment to code quality, conduct thorough testing, and work collaboratively with cross-functional teams. If you are a proactive and innovative developer with proficiency in these technologies, we invite you to apply and contribute to our dynamic and fast-paced work environment.',
              experience: 3,
              type: 'Full Time',
              salary: 5,
              skills: ['React', 'Nextjs', 'Redis', 'Express'],
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
                <Input
                  className="mb-3"
                  size="sm"
                  isRequired
                  isClearable
                  color="secondary"
                  type="text"
                  name="role"
                  label="Role"
                  //   placeholder="Name of the Organization"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.role}
                  onClear={() => (values.role = '')}
                  //   isInvalid={!!errors.password && touched.password}
                  //   errorMessage={errors.password}
                />
                <Textarea
                  size="sm"
                  className="mb-3"
                  color="secondary"
                  isRequired
                  type="text"
                  name="description"
                  label="Description"
                  //   placeholder="Overview about your company"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  onClear={() => (values.description = '')}
                  //   isInvalid={!!errors.password && touched.password}
                  //   errorMessage={errors.password}
                />
                <Input
                  isRequired
                  size="sm"
                  className="mb-3"
                  color="secondary"
                  // isClearable
                  type="number"
                  name="experience"
                  label="Experience Required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.experience.toString()}
                  // onClear={() => (values.no_of_years_experience = )}
                  //   isInvalid={!!errors.password && touched.password}
                  //   errorMessage={errors.password}
                />
                <Input
                  isRequired
                  size="sm"
                  className="mb-3"
                  color="secondary"
                  // isClearable
                  type="text"
                  name="type"
                  label="Type"
                  placeholder="(eg. Full Time)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                  // onClear={() => (values.no_of_years_experience = )}
                  //   isInvalid={!!errors.password && touched.password}
                  //   errorMessage={errors.password}
                />
                <Input
                  isRequired
                  size="sm"
                  className="mb-3"
                  color="secondary"
                  // isClearable
                  type="number"
                  name="salary"
                  label="Salary"
                  placeholder="(in LPA eg. 5)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.salary.toString()}
                  // onClear={() => (values.no_of_years_experience = )}
                  //   isInvalid={!!errors.password && touched.password}
                  //   errorMessage={errors.password}
                />
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
                    color="secondary"
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
                      Post
                    </Button>
                  </center>
                </div>
              </form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </>
  )
}

export default JobPostForm
