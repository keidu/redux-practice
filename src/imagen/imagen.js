import React, { Component } from 'react';
// import './botonera.css';
import logo from '../logo.svg';
import './imagen.css'
import { connect } from 'react-redux'


class Imagen extends Component {
    render() {
        return (
            <>
                <div>
                    <img src={logo} className={this.props.rotacion} alt="logo" />
                </div>
            </>
        );
    }
}

const mapStateToProps = (tienda) => ({
    rotacion: tienda.imagen.rotacion
})

export default connect(mapStateToProps, null)(Imagen);
