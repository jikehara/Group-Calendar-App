const ajaxRequest = (method, uri, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(`/api/${uri}`, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => json.data)
}

const handleErrors = response => {
  if (!response.ok) {
    return response.json()
      .then(({message, data}) => {
        const err = Error(message)
        Object.assign(err, data)
        err.status = response.status
        throw err
      })
  }
  return response
}

export const signUpUser = (user) => ajaxRequest('POST', 'signup', user)

export const logInUser = (username, password) => ajaxRequest('POST', 'login', {username, password})

export const getUser = () => ajaxRequest('GET', 'get_user')

export const logoutUser = () => ajaxRequest('GET', 'logout')
