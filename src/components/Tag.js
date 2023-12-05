import React from 'react';

const Tag = ({ text }) => {
    return (
            <div className='px-5 py-1 bg-gray-200 text-gray-600 font-medium text-center rounded-full'>
                <span>{text}</span>
            </div>
    );
};

export default Tag;