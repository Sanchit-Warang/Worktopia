'use client'
import { CircularProgress } from '@nextui-org/react'
import CompanyCard from './CompanyCard'
import { useGetCompaniesQuery } from '@/redux/features/company/companyApiSlice'
import { motion } from 'framer-motion'

const CompaniesList = () => {
  const { data: companies, isLoading, isError } = useGetCompaniesQuery('')

  if (isLoading) {
    return (
      <div className=" h-[100%] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (isError) {
    return <div>error</div>
  }

  return (
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
  )
}

export default CompaniesList
