//import 'style.scss';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const Basic = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <h1>
            Hello {this.props.name}!
        </h1>;
    }
});

function mapStateToProps(state) {
    return {
        name: state.get('name')
    };
}

export const BasicContainer = connect(mapStateToProps)(Basic);