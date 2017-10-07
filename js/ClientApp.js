import React from 'react'
import ReactDOM from 'react-dom'
import myTitle from './myTitle'

var div = React.DOM.div

var myFactory = React.createFactory(myTitle)

var myFirstComponent = React.createClass({
  render: function () {
    return (
div(null,
myFactory({title: 'These are the props', color: 'peru'}),
myFactory({title: 'Semicolons are worst', color: 'Green'}),
myFactory({title: 'are the lasdkjf  ksk', color: 'hotpink'}),
myFactory({title: 'Tjfl sdflj asdf llsdf', color: 'Red'}),
myFactory({title: 'These are the props styles', color: 'darkgrey'})
)
    )
  }
})
ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
