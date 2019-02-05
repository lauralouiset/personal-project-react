// FETCH HELPER FUNCTIONS

const checkStatus = response => response.ok ? Promise.resolve(response) : Promise.reject( new Error(response.statusText))

export const fetchData = url => {
  fetch(url)
      .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.log(err))
}