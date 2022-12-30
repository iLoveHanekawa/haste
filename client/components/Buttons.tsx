import React from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx'

type ButtonsPropsType = {
    setFields: React.Dispatch<React.SetStateAction<{
        text: string;
    }[]>>
    fields: { text: string }[]
    setData: React.Dispatch<React.SetStateAction<string>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function Buttons(props: ButtonsPropsType) {

    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        props.setLoading(true)
        let str = ''
        props.fields.forEach((val, index) => {
            str += `"${val.text}", `
        })
        const prompt = `Prepare a json object with ${props.fields[0].text} as the only key an array of 10 items . Each of the items in this array should have the following keys: ${str}and "References". This "Reference" key should hold the DOI link for the research paper from which the data for other keys of every individual item was extracted.`
        const res = await axios.post('https://intellichat.onrender.com/api/v1', {
            data: {
                msg: prompt
            }
        })
        const data = await res.data
        props.setLoading(false)
        console.log(data);
        
        props.setData(data.result)
    }

    return (
    <div className = 'w-80 md:w-96 flex justify-center gap-1 md:justify-between md:gap-0 items-center mt-5'>
        <button className = 'btn bg-purple-300 w-7/12 md:w-8/12 text-white rounded-l-full' onClick = {() => {
            props.setFields(i => {
            return [...i, { text: '' }]
            })
        }}>Add Parameters</button>
        <button className = 'btn bg-cyan-400 text-white rounded-r-full' onClick = {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            submitHandler(e)
        }}>Get JSON</button>
    </div>
    )
}

export default Buttons