const EventEmitter = require('events').EventEmitter


module.exports = class NoticeController extends EventEmitter {


  constructor (opts) {
    super()
    this.configManager = opts.configManager
  }

  getState () {
    return {
      unreadNotices: this.configManager.getUnreadNotices(),
      notices: this.configManager.getNoticesList(),
      markNoticeRead: this.configManager.markNoticeRead(),
    }
  }

  lastUnreadNotice () {
    var notices = this.configManager.getUnreadNotices
    return (notices) ? notices[0] : null
  }

}
