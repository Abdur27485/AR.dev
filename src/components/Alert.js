import React from 'react';

const Alert = ({ display }) => {
    return (
        <div className={`${display ? (window.screen.width >= (768) ? 'fixed' : 'hidden') : 'hidden'} top-3/4 p-2 px-4 rounded-full left-1/2 -translate-x-1/2 bg-gray-200 bg-opacity-50 text-gray-900`}>
            <p className='text-base'>Text Copied</p>
        </div>
    );
};

export default Alert;