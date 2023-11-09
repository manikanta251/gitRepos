import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchRepoDetails} from '../api'

function RepoDetails() {
  const {owner, name} = useParams()
  const [repoDetails, setRepoDetails] = useState(null)

  useEffect(() => {
    fetchRepoDetails(owner, name).then(response => {
      setRepoDetails(response.data)
    })
  }, [owner, name])

  return (
    <div>
      {repoDetails ? (
        <div>
          <h2>{repoDetails.name}</h2>
          <p>Description: {repoDetails.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default RepoDetails
