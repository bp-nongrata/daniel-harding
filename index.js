const axios = require('axios')
const { range } = require('lodash')
const { to } = require('await-to-js')
const download = require('download')

async function getAllClays() {
  const baseUrl = 'https://api.clayfriends.io/friend/'
  const imagePath = `${__dirname}/clayfriends`

  range(1, 5001).forEach(async (i) => {
    const [err, res] = await to(axios.get(baseUrl + i))
    if (!res) throw new Error(err?.message)
    await download(res.data.image, imagePath)
  })
}
getAllClays().catch((err) => console.log(err))
