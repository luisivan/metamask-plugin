const fs = require('fs')
const path = require('path')

const noticesPath = path.join(__dirname, 'collection')
const noticeNames = fs.readdirSync(noticesPath)

const notices = noticeNames.reduce((result, noticeFileName) => {
  const noticePath = path.join(__dirname, 'collection', noticeFileName)
  const noticeFile = fs.readFileSync(noticePath).toString()
  const notice = JSON.parse(noticeFile)
  result[noticeFileName.split('.')[0].replace(/-/g, ' ', 'g')] = notice
  return result
}, {})

const result = `module.exports = ${JSON.stringify(notices)}`

const noticeJsonPath = path.join(__dirname, 'notices.js')
fs.writeFileSync(noticeJsonPath, result)
