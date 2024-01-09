'use client'
import { Chip } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

type Props = {
  skills: string[]
  all: boolean
  isDeletable?: boolean
  allowDelay?: boolean
  delay?: number
  className?: string
  color?: 'secondary' | 'default' | 'primary' | 'success' | 'warning' | 'danger'
  handleDeleteSkill?: (i: number) => void
}

const Skills = ({
  skills,
  all,
  delay = 0,
  className = '',
  allowDelay = true,
  color = 'secondary',
  isDeletable = false,
  handleDeleteSkill = (i: number) => {},
}: Props) => {
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
              transition={{
                duration: 0.3,
                delay: allowDelay ? i * 0.3 + delay : 0,
              }}
            >
              <Chip size="sm" variant="bordered" color={color}>
                {skill}
                {isDeletable && (
                  <>
                    {' '}
                    <button
                      className="inline h-[1rem] text-danger"
                      onClick={(e) => {
                        e.preventDefault()
                        handleDeleteSkill(i)
                      }}
                    >
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </>
                )}
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
