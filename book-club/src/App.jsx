import React, {useState, useEffect} from 'react'

const App = () => {
  const [books, setBooks] = useState([])

  console.log('load every time the component renders...')

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        console.log('here is what our fetch request returns', response)

        const books = await response.json()
        console.log('Our json-ified response', books)
        setBooks(books)
      } catch (error) {
        console.log(error)
      }
    }

    fetchdata()
  }, [])

  console.log(`the books array in our state: `, books)

  return (
    <>
      <h1>Book-Club</h1>
    </>
  )
}

export default App
