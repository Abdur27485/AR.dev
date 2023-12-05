import React from 'react';

const SectionContainer = ({ children }) => {
    return (
        <div className='px-4 py-16 md:px-8 md:py-24'>
            {children}
        </div>
    );
};

export default SectionContainer;