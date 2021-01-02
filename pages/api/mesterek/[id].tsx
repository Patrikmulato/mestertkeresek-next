import axios from 'axios'

export default async function handler(req, res) {
  const {
    query: { id },
  } = req

  const response = await axios
    .get(`https://mestertkeresek.hu/api/mesterek/${id}`)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
    .then(function () {
      // always executed
    })

  res.end(response)
}
