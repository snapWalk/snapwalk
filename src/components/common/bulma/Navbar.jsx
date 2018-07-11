import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../../assets/images/logo.png';

function Navbar ({
    brand
}) {
    return (
        <nav
            className="navbar is-dark"
            role="navigation"
            aria-label="main navigation"
            style={{width: '100%'}}>
            <div className="navbar-brand">
                { _renderBrand(brand) }
            </div>
        </nav>
    );
}

function _renderBrand (brand) {
    return (
        <a
            href={brand.url}
            className="navbar-item is-size-3">
            <img src={icon} height={64} width={64}/>
            <span>{brand.label}</span>
        </a>
    );
}

Navbar.propTypes = {
    brand: PropTypes.object.isRequired
};

export default Navbar;
