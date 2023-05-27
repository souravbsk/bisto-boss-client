import React from 'react';

const SectionTitle = ({headingTitle,subTitle}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mb-12'>
            <p className='text-yellow-600 mb-4'>--- {subTitle} ---</p>
            <h3 className='text-3xl font-medium uppercase border-y-2 p-3'>{headingTitle}</h3>
        </div>
    );
};

export default SectionTitle;