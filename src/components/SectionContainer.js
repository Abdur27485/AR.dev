import React from 'react';

const SectionContainer = ({ children, id, bg }) => {
    return (
        <div id={id ? id : ''} className={`${bg} px-4 py-16 md:px-28 md:py-24`}>
            {children}
        </div>
    );
};

export default SectionContainer;