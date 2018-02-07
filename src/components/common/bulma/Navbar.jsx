import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

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
            className="navbar-item is-size-4-desktop is-size-5-tablet is-size-6-mobile">
            <Icon icon={brand.icon} />&nbsp;
            <span>{brand.label}</span>
        </a>
    );
}

Navbar.propTypes = {
    brand: PropTypes.object.isRequired
};

export default Navbar;
