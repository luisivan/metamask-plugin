const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits
const actions = require('../actions')

module.exports = Notice

inherits(Notice, Component)
function Notice () {
  Component.call(this)
}

Notice.prototype.render = function () {
  const props = this.props
  const notice = props.notice

  return (
    h('div', [
      h('h1', notice.title),
      h('span', notice.message),
      h('button', {
        style: {margin: '10px'},
        onClick: () => props.dispatch(actions.markNoticeRead(notice)),
      }),
    ])
  )
}
