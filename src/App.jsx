import './App.css';
import {getGroqChatCompletion} from './utils/groq';

function App() {
  const handelSubmit = async () => {
    const ai = await getGroqChatCompletion(content.value);
    console.log({ai});
  }
  return (
    <main className='flex flex-col min-h-[80vh] justify-center items-center'>
      <h1 className='text-4xl text-indigo-500'>REACT|GROQ</h1>
      <form className='flex flex-col gap-4 py-4'>
        <input 
          placeholder='Ketik permintaan disini...'
          className='py-2 px-4 text-md rounded-md'
          id="content"
          type='text'
        />
        <button 
          onClick={handelSubmit}
          className='bg-indigo-500 py-2 px-4 font-bold text-white rounded-md'
          type='button'
          >
            Submit
          </button>
      </form>
    </main>
  )
}

export default App
