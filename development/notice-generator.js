var fs = require('fs')
var path = require('path')
var prompt = require('prompt')

prompt.start()

prompt.get(['notice_name', 'title', 'body (optional)'], function (err, result) {
  //
  // Log the results.
  //
  fs.writeFile(`notices/collection/${result.notice_name}.json`, `{\n\t"notice_name": "${result.notice_name}",\n\t"date": "${new Date().toDateString()}",\n\t"title": "${result.title}",\n\t"body": "${result.body || "[FILL BODY IN HERE]"}",\n\t"read": false\n}\n`, { flag: 'wx' }, function(err) {
    if (err) {
      return console.log(err)
    }
    console.log("Notice successfully generated!")
  })
})
