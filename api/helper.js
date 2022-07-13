const csvToJson = (data) => {
  const arrayOfData = data.split(/\r\n|\n/)
  const headers = arrayOfData[0].split(/\t|,/)
  const result = []

  for (let i = 1; i < arrayOfData.length; i++) {
    const data = arrayOfData[i].split(/\t|,/)

    if (data.length === headers.length) {
      result.push({
        file: data[0],
        text: data[1],
        number: data[2],
        hex: data[3]
      })
    }
  }
  if (JSON.stringify(result) !== '[]') {
    return result
  }
  return undefined
}

module.exports = {
  csvToJson
}
