import { Footer, Navbar } from '../components'
import { useEffect, useState } from 'react'
import { Loop } from '../components'


const IndexPage = () => {
  const [code, setCode] = useState<string>()
  const [_document, set_document] = useState(null)

  useEffect(() => {
    if (document !== undefined) {
      set_document(document.querySelector('select').value)
    }
    console.log(_document)
  })

  const submitCode = (stre:string) => {
    let ne = new Loop(-1, null)
    let ns = new Loop(10, ne)
    
    setCode(ns.code)
  }

  return (
    <div className="bg-slate-900 fixed min-h-full min-w-full text-slate-200">
      <div className='flex flex-col gap-20 pt-20 items-center min-h-screen min-w-screen'>
        <div className=''>
          <Header />
        </div>
        <div className='flex lg:flex-row flex-col gap-10'>
          <div>
            <InitScript />
          </div>
          <div className='flex flex-col gap-4'>
            <DisplayCode code={code} />
            <button onClick={() => submitCode(document.querySelector('select').value)} className='p-2 bg-lime-600 rounded-full text-black'>
              Initialize
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

const SetCode = () => {
  return (
    <div className='flex flex-row items-center gap-4'>
      <label className='block tracking-wide' htmlFor="keyword">
        Key
      </label>
      <div className="relative w-min">
        <select className="block uppercase appearance-none text-black rounded-xl pr-6 py-1 pl-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="keyword">
          <option>ctrl</option>
          <option>alt</option>
          <option>shift</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
    </div>
  )
}

const InitScript = () => {

  return (
    <form id='form' className='flex flex-row items-center gap-4'>
      <label className='block tracking-wide' htmlFor="keyword">
        Initalize script with:
      </label>
      <div className="relative w-min">
        <select className="block normal-case appearance-none text-black rounded-xl pr-6 py-1 pl-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="keyword">
          <option>none</option>
          <option>ctrl</option>
          <option>alt</option>
          <option>shift</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
      <span>
        +
      </span>

      <input className="appearance-none normal-case block w-12 text-black rounded-xl py-1 px-2 leading-tight focus:outline-none focus:bg-white" id="char" type="text" placeholder="f12" />

    </form>
  )
}

/**
 * 
 * @returns Header component
 */
const Header = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='text-2xl font-bold text-lime-600'>
        AutoHotkey Maker
      </h1>
      <p>
        Quickly create simple AHK scripts with modular components
      </p>
    </div>
  )
}

/**
 * Displays the ahk code passed into it.
 * 
 * @param props .code 
 * @returns tsx display of autohotkey code 
 */
const DisplayCode = (props) => {

  return (
    <div className='bg-white rounded-xl text-black py-2 px-4'>
      <div className='w-96 min-h-fit h-56 whitespace-pre'>
        {props.code}
      </div>

    </div>
  )
}

export default IndexPage


