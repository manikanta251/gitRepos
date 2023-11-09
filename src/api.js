const BASE_URL = 'https://api.github.com'

export const fetchRepos = page => {
  const currentDate = new Date()
  currentDate.setMonth(currentDate.getMonth() - 1)

  const url = `${BASE_URL}/search/repositories?q=created:>$2017-10-22&sort=stars&order=desc&page=${page}`

  return fetch(url).then(response => response.json())
}

export const fetchRepoDetails = (owner, name) => {
  const url = `${BASE_URL}/repos/${owner}/${name}`

  return fetch(url).then(response => response.json())
}
