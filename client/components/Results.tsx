import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { ToastContainer, toast } from 'react-toastify';
import { VscCopy, VscJson } from 'react-icons/vsc'
import 'react-toastify/dist/ReactToastify.css';
import * as XLSX from "xlsx"
import Loading from './Loading';
import { RiFileExcel2Line } from 'react-icons/ri'

type ResultsPropsType = {
    data: string
    loading: boolean
    fields: { text: string }[]
}

function Results(props: ResultsPropsType) {
    const notify = () => toast("Copied to Clipboard!");
    const downloadExcel = (data: []) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")
        XLSX.writeFile(workbook, "DataSheet.xlsx");
      };
  return (
    <>
        {props.loading? <div className = 'flex flex-col items-center text-xs text-cyan-400'>
                <Loading />
                <div className = 'my-2'>Loading...</div>
            </div>: <div className = 'mt-10 w-nvw mb-5'>
            <div className = 'w-full flex justify-between'>
                <button className = 'flex items-end gap-1 text-gray-500 mb-1 text-xs' onClick = {() => {
                navigator.clipboard.writeText(`${props.data}`)
                notify()
                }}><VscCopy className = 'text-lg' />Copy</button>
                <div className = 'flex gap-2'>    
                    <a className = 'text-xs rounded-l-full bg-amber-400 tracking-wider hover:scale-105 duration-500 transition flex items-end mb-1 gap-1 text-white py-2 px-4' href={`data:text/json;chatset=utf-8,${encodeURIComponent(
                        JSON.stringify(JSON.parse((props.data as string).replace(/\r?\n|\r/g, '')))
                        )}`} download = 'data.json'><VscJson className = 'text-lg' />Download JSON
                    </a>
                    <button className = 'text-xs rounded-r-full flex items-end mb-1 tracking-wider hover:scale-105 duration-500 transition gap-1 text-white py-2 px-4 bg-red-300' onClick = {() => {
                        const data = JSON.parse(props.data as string) 
                        downloadExcel(data[props.fields[0].text] as [])}}><RiFileExcel2Line className = 'text-lg' />Download EXCEL
                    </button>
                </div>
            </div>
            <SyntaxHighlighter showLineNumbers = {true} language="javascript" >
            {`${props.data}`}
            </SyntaxHighlighter>
            <ToastContainer />
        </div>}
    </>
  )
}

export default Results