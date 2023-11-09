import React, {useState, useEffect} from 'react'
import {fetchRepos} from '../api'
import RepoItem from './RepoItem'
import Pagination from './Pagination'

function RepoList() {
  const [repos, setRepos] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchRepos(page).then(response => {
      setRepos(response.data.items)
    })
  }, [page])

  return (
    <div>
      <h1>Most Starred GitHub Repositories</h1>
      {repos.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default RepoList
