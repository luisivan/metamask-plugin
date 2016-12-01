const EventEmitter = require('events').EventEmitter


module.exports = class NoticeController extends EventEmitter {


  constructor (opts) {
    super()
  }

  getState () {
    return {
      unreadNotices: this.configManager.getUnreadNotices(),
      notices: this.configManager.getNoticesList(),
    }
  }

  displayLastUnreadNotice () {

  }

  markNoticeAsRead (noticeName) {

  }



}
