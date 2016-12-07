const EventEmitter = require('events').EventEmitter


module.exports = class NoticeController extends EventEmitter {


  constructor (opts) {
    super()
    this.configManager = opts.configManager
  }

  getState () {
    var unreadNotices = this.configManager.getUnreadNotices()

    return {
      notices: this.configManager.getNoticesList(),
      activeNotice: !!unreadNotices,
      lastUnreadNotice: this.lastUnreadNotice(),
    }
  }

  lastUnreadNotice () {
    var notices = this.configManager.getUnreadNotices()
    return (notices) ? notices[0] : null
  }


}
