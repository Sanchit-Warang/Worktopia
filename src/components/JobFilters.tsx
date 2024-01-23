'use client'

import { Input, Slider, SliderValue } from '@nextui-org/react'


type Filters = {
  search: string
  role: string
  required_experience__lte: string
  organization__name: string
  salary__lte: string
}

type Props = {
  filters: Filters
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

const JobFilters = ({ filters, handleInputChange, setFilters }: Props) => {
  // const [salary, setSalary] = useState<SliderValue>(0)
  // const [experience, setExperience] = useState<SliderValue>(0)

  const handleSalaryChange = (value: SliderValue) => {
    setFilters({
      ...filters,
      salary__lte: value.toString(),
    })
  }

  const handleExperienceChange = (value: SliderValue) => {
    setFilters({
      ...filters,
      required_experience__lte: value.toString(),
    })
  }

  return (
    <div className="p-2">
      <div className="px-3">
        <p>Filters</p>
        <div className="mb-3">
          <Input
            name="role"
            value={filters.role}
            onChange={handleInputChange}
            type="text"
            label="Role"
            size="sm"
            variant="underlined"
            color="primary"
          />
          {/* <Input
            //  name='location'
            //   value={filters.location}
            type="text"
            label="Location"
            size="sm"
            variant="underlined"
            color="secondary"
          /> */}
        </div>
        {/* <Slider
        size="sm"
        label="Experience"
        maxValue={10}
        minValue={1}
        step={1}
        defaultValue={[2, 8]}
        formatOptions={{ style: 'unit', unit: 'year' }}
        classNames={{
          base: 'max-w-md gap-3',
          filler:
            'bg-gradient-to-r from-primary-300 to-secondary-300 dark:from-primary-600 dark:to-secondary-800',
        }}
        renderThumb={({ index, ...props }) => (
          <div
            {...props}
            className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <span
              className={cn(
                'transition-transform bg-gradient-to-br shadow-small rounded-full w-3 h-3 block group-data-[dragging=true]:scale-80',
                index === 0
                  ? 'from-primary-200 to-primary-500 dark:from-primary-400 dark:to-primary-600' // first thumb
                  : 'from-secondary-200 to-secondary-600 dark:from-secondary-600 dark:to-secondary-800' // second thumb
              )}
            />
          </div>
        )}
      /> */}
        <Slider
          name="required_experience__lte"
          value={+filters.required_experience__lte}
          onChange={handleExperienceChange}
          label="Experience"
          size="sm"
          step={1}
          showSteps
          maxValue={10}
          minValue={0}
          getValue={(years) => `${years}yrs`}
          // defaultValue={0}
          className="max-w-md"
        />
        <Slider
          label="Salary"
          name="salary__lte"
          value={+filters.salary__lte}
          onChange={handleSalaryChange}
          size="sm"
          showSteps
          color="secondary"
          step={1}
          maxValue={100}
          minValue={0}
          getValue={(sal) => `₹${sal} LPA`}
          // defaultValue={1}
          className="max-w-md"
        />
        {/* <Slider
        size="sm"
        label="Salary"
        maxValue={10}
        minValue={1}
        step={1}
        defaultValue={[1, 10]}
        formatOptions={{ style: 'currency', currency: 'INR' }}
        classNames={{
          base: 'max-w-md gap-3',
          filler:
            'bg-gradient-to-r from-primary-300 to-secondary-300 dark:from-primary-600 dark:to-secondary-800',
        }}
        renderThumb={({ index, ...props }) => (
          <div
            {...props}
            className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <span
              className={cn(
                'transition-transform bg-gradient-to-br shadow-small rounded-full w-3 h-3 block group-data-[dragging=true]:scale-80',
                index === 0
                  ? 'from-primary-200 to-primary-500 dark:from-primary-400 dark:to-primary-600' // first thumb
                  : 'from-secondary-200 to-secondary-600 dark:from-secondary-600 dark:to-secondary-800' // second thumb
              )}
            />
          </div>
        )}
      /> */}
        {/* <Button variant='ghost' color='primary' size='sm' className='mt-4'>
        Apply
      </Button> */}
      </div>
    </div>
  )
}

export default JobFilters
