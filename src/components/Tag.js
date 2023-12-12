import React from 'react';

const Tag = ({ text, type }) => {
    return (
            <div className={`px-5 py-1 ${type == 'tag' ? 'bg-gray-200 text-gray-600' : 'bg-slate-900 text-white font-bold shadow-inner'}  font-medium text-center rounded-full`}>
                <span>{text}</span>
            </div>
    );
};

export default Tag;