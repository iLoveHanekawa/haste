import React from 'react'
import { AiOutlineDelete} from 'react-icons/ai'

type FormPropsType = {
    fields: { text: string }[]
    setFields: React.Dispatch<React.SetStateAction<{ text: string }[]>>
}

function Form(props: FormPropsType) {

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newText = e.currentTarget.value
        let newArr = [...props.fields]
        newArr[index].text = newText
        props.setFields(newArr)
    }
    const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault()
        let newArr = [...props.fields]
        newArr.splice(index, 1)
        props.setFields(newArr)
    }
    return (
        <form>
            {props.fields.map((i, index) => {
            return <div className = 'flex flex-col' key = {index}>
                <label className = 'text-xs text-cyan-400' htmlFor={`id${index}`}>{`${index === 0? 'Category': `Parameter ${index}`}`}</label>
                <div className = 'flex gap-1 mb-2'>
                    <input className = 'border-teal-200 py-2 border-2 focus:outline-none text-teal-500 text-sm w-64 md:w-80 md:text-md rounded-sm indent-2' onChange = {(e) => {
                        inputHandler(e, index)
                    }} value = {i.text} id = {`id${index}`} placeholder={`${index === 0? 'Item category, eg. Plants, Drinks, etc': 'Parameter key'}`}/>
                    {index !== 0 && <button className = 'bg-blue-400 rounded-r-full px-4 text-white' onClick = {(e) => {
                        deleteItem(e, index)
                    }}><AiOutlineDelete /></button>}
                </div>
            </div>
            })}
        </form>
  )
}

export default Form