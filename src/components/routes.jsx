import React from 'react';
import Menu from './menu/menu'
import MenuContent from './menu/menu-content';

export default function Routes({
    activePath,
    children
}) {
    return (
        <section style={style.container}>

            <h5 style={style.heading}>Routes</h5>

            { /* Render the link menu */ }
            <Menu
                activePath={activePath}
                items={{
                    increment   : '/',
                    decrement   : '/decrement',
                    reset       : '/reset'
                }}
            />

            { /* Render the active route */ }
            <MenuContent>
                { children }
            </MenuContent>

        </section>
    )
}

const style = {
    container: {
        margin: 5,
        height: '100%'
    },
    heading: {
        margin: '5px 0'
    }
};