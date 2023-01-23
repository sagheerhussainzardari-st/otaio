import Router from 'next/router';
import React, { useEffect } from 'react'

const home = () => {
    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/home') {
            Router.push('/')
        }
    });
    return (
        <div></div>
    )
}

export default home