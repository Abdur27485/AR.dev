import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='px-5 py-1 bg-gray-200 text-gray-600 font-medium text-center rounded-full'>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default SectionTitle;