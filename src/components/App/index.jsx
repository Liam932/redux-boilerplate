import React from 'react';

export default React.createClass({
    displayName: 'App',
    render: function() {
        return this.props.children;
    },
    propTypes: {
        children: React.PropTypes.element.isRequired
    }
});