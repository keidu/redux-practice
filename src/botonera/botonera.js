import React, { Component } from 'react';
import { connect } from 'react-redux'
// import './botonera.css';

class Botonera extends Component {
    render() {
        const { inc, dec } = this.props
        return (
            <>
                <div>
                    <button onClick={inc}> Incrementar </button>
                    <button onClick={dec}> Decrementar </button>
                </div>
            </>
        );
    }
}

const mapDispacthToProps = (dispatch) => ({
    inc: () => dispatch({ type: 'incrementar' }),
    dec: () => dispatch({ type: 'decrementar' })

})

export default connect(null, mapDispacthToProps)(Botonera);