import HomePage from './pages/HomePage/HomePage'
import './App.css'
import { Routes, Route } from 'react-router'

type QuestionType = 
| {
    id: number,
    type: "single",
    question: string,
    variants: string[],
    rightAnswer: number
}
| {
    id: number,
    type: "multiple",
    question: string,
    variants: string[],
    rightAnswer: number[]
}
| {
    id: number,
    type: "text",
    question: string,
    rightAnswer: string
}

export type TestType = {
    id: string,
    name: string,
    description: string,
    questions: QuestionType[]
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App