import { useState, useCallback, useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false) 
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordReff = useRef(null)
  const passwordGenerator = useCallback(() => {
    
    let pass = ''
    let str = 'ABCDEFIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) { str += '0123456789' }
    if (charAllowed) { str += '!@#$%^&*()_+|~?><' }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  const copypasswordtoclipboard = useCallback(()=>{
    passwordReff.current?.select()
    window.navigator.clipboard.writeText(password)
    passwordReff.current?.setSelectionRange(1,9)
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center text-3xl'> Password Generator</h1>
        <div className='flex shadow rounded-leg overflow-hidden mb-4 rounded-lg'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            ref={passwordReff}
            readOnly
          />
          <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberallowed((prev)=> !prev)
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              onChange={()=>{
                setcharAllowed((prev)=> !prev)
              }}
            />
            <label>Charector</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
