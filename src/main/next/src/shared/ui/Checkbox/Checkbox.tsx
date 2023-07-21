
import { useEffect, useState } from "react"

interface ICheckbox {
    label: string
    value: string
    handler?: any
    addHandler?:  any
    removeHandler?: any
}

export const CheckboxComponent = ({label, value, handler, addHandler, removeHandler}:ICheckbox) => {
    
    const [val, setVal] = useState<typeof value>(" ")
    const [isChcked, setIsChecked] = useState(false)
    const handleChange = (event: Event) => {
       setVal(event.target?.value)
        setIsChecked(event.target?.checked)
        console.log(event?.target?.checked)
        //isChcked ? removeHandler(`${val}`) : addHandler(`${val}`)
    }
    console.log("Val checkbox", val)
   
    useEffect(() => {
        !isChcked ? removeHandler(val) : addHandler(val)
    }, [val, isChcked])

    return (
        <div>
            <label className="small-2"><input value={value}   onChange={handleChange} type="checkbox"/> {label} </label>
        </div>
    )
}