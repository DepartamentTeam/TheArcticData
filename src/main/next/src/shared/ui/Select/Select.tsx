'use client'
import { useEffect, useState } from "react"

export type TOptions = {
    id?: number
    label: string
    value: string
} 

interface ISelect {
    title: string
    options: TOptions[]
    handler?: any
}


export const Select = ({title, handler, options}:ISelect) => {
    const [selectedValue, setSelectedValue] = useState(options[0])

    useEffect(() => {
        handler(selectedValue)
    }), [selectedValue]
    
    const handleChange = (event: Event) => {
        event.preventDefault()
        setSelectedValue(event?.target?.value)
    }
    console.log("Selected value: " + selectedValue)
    return (
        <div>
            <label className="small-1">{title}
            <select onChange={handleChange} defaultValue={selectedValue} name={title}>

                {
                    options.map((opt, i) => (
                        <option key={i} value={opt.value}>{opt.label}</option>
                    ))
                }
            </select></label>
          
        </div>
    )
}