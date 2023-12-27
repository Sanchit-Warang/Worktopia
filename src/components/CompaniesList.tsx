'use client'
import { ScrollShadow, CircularProgress } from '@nextui-org/react'
import CompanyCard from './CompanyCard'
import { useGetCompaniesQuery } from '@/redux/features/company/companyApiSlice'
import { motion } from 'framer-motion'

const CompaniesList = () => {
  const { data: companies, isLoading, isError } = useGetCompaniesQuery('')

  if (isLoading) {
    return (
      <div className=" h-[83vh] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (isError) {
    return <div>error</div>
  }

  return (
    <ScrollShadow
      size={100}
      className="h-[83vh] scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive"
    >
      <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-6 py-6 px-10">
        {companies &&
          companies.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, translateX: i % 2 === 0 ? -1 * 15 : 15 }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{ duration: 0.3, delay: i * 0.3 }}
            >
              <CompanyCard company={company} />
            </motion.div>
          ))}
      </div>
    </ScrollShadow>
  )
}

export default CompaniesList
