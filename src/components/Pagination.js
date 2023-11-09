import React from 'react'

function Pagination({page, setPage}) {
  const handleNextPage = () => {
    setPage(page + 1)
  }

  return (
    <div>
      <button onClick={handleNextPage}>Load More</button>
    </div>
  )
}

export default Pagination
