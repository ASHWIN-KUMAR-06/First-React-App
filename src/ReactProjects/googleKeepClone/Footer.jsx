import React from 'react';


function Footer(){

    const year = new Date().getFullYear();

    return (
        <>
            <footer className='footer'>
                <p> footer &#169; {year} </p>
            </footer>
        </>
    )
}

export default Footer;