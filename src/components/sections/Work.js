import React from 'react';
import SectionContainer from '../SectionContainer';
import SectionSecondaryText from '../SectionSecondaryText';
import Tag from '../Tag';
import ProjectCard from '../ProjectCard';

const Work = () => {
    return (
        <SectionContainer bg={'bg-gray-100'} id={'work'}>
            <div className='flex justify-center items-center'>
                <Tag text={'Work'}></Tag>
            </div>
            <SectionSecondaryText text={'Some of the noteworthy projects I have built:'}></SectionSecondaryText>
            <div className='mt-12 space-y-6'>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </SectionContainer>
    );
};

export default Work;