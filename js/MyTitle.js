import React from 'react'

var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({
  render: function () {
    return (
div(null,
h1({style: {color: this.props.color}}, this.props.title)
)
    )
  }
})

export default myTitle
