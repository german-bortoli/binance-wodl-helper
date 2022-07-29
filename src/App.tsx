import { FormEvent, useState } from 'react'

import { filterData } from './utils/glossary.utils'
import './App.css'

function App() {

  const [count, setCount] = useState<number>(0)
  const [words, setWords] = useState<string[]>()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setWords(filterData(count))
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setCount(Number(e.currentTarget.value))
  }

  return (
    <div className="App">
      <h1>BINANCE WODL HELPER</h1>
      <p>Search potential crypto words to play WODL</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="word-count"
          value={count}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      <h2>Words</h2>
      <ul>
        {words?.map((w) => <li key={w}>{w}</li>)}
      </ul>
    </div>
  )
}

export default App
