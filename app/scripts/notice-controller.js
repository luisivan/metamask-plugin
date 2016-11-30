const fs = requrie('fs')

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

  markNoticeAsRead (notice) {

  }



}
