import { propsInput } from "@/shared/models"

export const InputComponent = ({
  label,
  error,
  id,
  register,
  isRequired,
  icon,
  placeholder,
  type,
}: Partial<propsInput>) => {
  return (
    <div>
      <div className="input-field">
        
        <span className="input__icon">{icon}</span>
        <label className="small-1">
        {label} 
        <input
          
          type={type}
          placeholder={placeholder}
          {...register(`${id}`, { required: isRequired })}
          required={isRequired}
        />
        </label>
      </div>
      {error && <div className="">error.message</div>}
    </div>
  )
}
