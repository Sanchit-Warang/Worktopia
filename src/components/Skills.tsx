'use client'
import { Chip } from '@nextui-org/react'
import { motion } from 'framer-motion'

type Props = {
  skills: string[]
  all: boolean
  delay: number
  className?: string
}

const Skills = ({ skills, all, delay, className = '' }: Props) => {
  if (all === true) {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {skills.map((skill, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateX: 15 }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{ duration: 0.3, delay: i * 0.3 + delay }}
            >
              <Chip size="sm" variant="bordered" color="secondary">
                {skill}
              </Chip>
            </motion.div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="flex gap-2">
      {skills.slice(0, 3).map((skill, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, translateX: 15 }}
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            transition={{ duration: 0.3, delay: i * 0.3 + delay }}
          >
            <Chip size="sm" variant="bordered" color="secondary" key={i}>
              {skill}
            </Chip>
          </motion.div>
        )
      })}
      {skills.length - 3 !== 0 && (
        <motion.div
          key={4}
          initial={{ opacity: 0, translateX: 15 }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{ duration: 0.3, delay: 4 * 0.3 + delay }}
        >
          <Chip size="sm" color="secondary" variant="flat">
            +{skills.length - 3}
          </Chip>
        </motion.div>
      )}
    </div>
  )
}

export default Skills
