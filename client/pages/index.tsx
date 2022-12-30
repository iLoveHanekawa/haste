import React from "react"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Form from "../components/Form"
import Buttons from "../components/Buttons"
import Results from "../components/Results"
import { GiSpeedometer } from 'react-icons/gi'

export default function Home() {
  
  const [fields, setFields] = React.useState<{ text: string }[]>([{ text: 'Instructions' }])
  const [data, setData] = React.useState<string>('{\n    \"Instructions\": [\n        {\n            \"Example\": \"Try entering Plants in the Category field. Add another parameter with the key Fruit taste.Press Get JSON to see the response object.\"\n        }\n    ]\n}')
  const [loading, setLoading] = React.useState<boolean>(false)

  return (
    <>
      <div className = 'relative font-poppins flex flex-col items-center h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-cyan-400'>
        <GiSpeedometer className = 'absolute top-1/2 left-1/2 text-vvl text-cyan-300 opacity-25 -translate-x-1/2 -translate-y-1/2 -z-10 scale-150' />
        <NavBar /> 
        <Hero />
        <Form fields = {fields} setFields = {setFields}/>
        <Buttons setLoading = {setLoading} setData = {setData} fields = {fields} setFields={setFields} />
        <Results fields = {fields} loading = {loading} data = {data} />
        
      </div>
    </>
  )
}
