import { useId } from "react"
import { twMerge } from "tailwind-merge"

type TProps = {
  label: string
  isChecked: boolean
  onChange: () => void
  className: string
}

const ButtonSwitch = ({
  label,
  isChecked,
  onChange,
  className = "",
}: TProps) => {
  const switchId = useId()

  const labelClass =
    label === "Edit"
      ? 'after:content-["Edit"] after:translate-x-1/4 after:-right-[1.65rem]'
      : label === "Last Week"
      ? 'after:content-["Last_Week"] after:translate-x-1/2 after:-right-[2.75rem]'
      : label === "Center"
      ? 'after:content-["Center"] after:translate-x-1/2 after:-right-[1.75rem]'
      : label === "My_sights"
      ? 'after:content-["My_sights"] after:translate-x-1/2 after:-right-[2.75rem]'
      : 'after:content-[""]'

  return (
    <div
      key={switchId}
      className={twMerge("flex h-6 items-center justify-center", className)}
    >
      <label
        htmlFor={`switch-${switchId}}`}
        className={`
              before:text-white
              dark:after:text-white
              relative
              h-full w-[3.5rem] rounded-lg

              border
              border-primary
              before:absolute
              before:top-1/2
              before:flex
              before:h-6
              before:w-6
              before:-translate-y-1/2
              before:items-center
              before:justify-center
              before:rounded-lg
            before:border
              before:border-primary
              before:text-xl
              before:font-bold
              before:transition-all
              before:duration-700
              after:absolute

              after:top-1/2

              after:w-[max-content]  
              after:-translate-y-1/2
              after:font-semibold
              after:text-primary
              dark:border-primary-light 
              dark:before:border-primary-light 
              ${labelClass}
              
              ${
                isChecked
                  ? 'before:left-auto before:right-0 before:border-r-0 before:bg-primary before:content-["✓"] dark:before:bg-primary-light'
                  : 'before:left-0 before:right-auto before:border-l-0 before:bg-gray-200 before:content-[""]'
              }`}
      >
        <input
          id={`switch-${switchId}}`}
          type='checkbox'
          className='absolute -left-[10000px]'
          onChange={onChange}
        ></input>
      </label>
    </div>
  )
}

export default ButtonSwitch
