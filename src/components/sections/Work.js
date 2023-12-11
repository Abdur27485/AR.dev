import React from 'react';
import SectionContainer from '../SectionContainer';
import SectionSecondaryText from '../SectionSecondaryText';
import Tag from '../Tag';
import ProjectCard from '../ProjectCard';

const Work = () => {
    const projects = [
        {
            name: 'Fractos',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus debitis, reiciendis fugit quis ipsum tenetur alias, cumque mollitia aut, nemo recusandae dolores quibusdam necessitatibus distinctio! Nesciunt asperiores minus recusandae reiciendis.',
            technologies: ['Express', 'React.js', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
            liveLink: 'https://fractos-client.vercel.app/',
            thumb: '/projectThumbs/fractos.png',
            constribution: 'Frontend'
        },
        {
            name: 'Triolingo',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus debitis, reiciendis fugit quis ipsum tenetur alias, cumque mollitia aut, nemo recusandae dolores quibusdam necessitatibus distinctio! Nesciunt asperiores minus recusandae reiciendis.',
            technologies: ['Express', 'React.js', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
            liveLink: 'https://fractos-client.vercel.app/',
            thumb: '/projectThumbs/triolingo.png',
            constribution: 'Frontend'
        },
        {
            name: 'Toygo',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus debitis, reiciendis fugit quis ipsum tenetur alias, cumque mollitia aut, nemo recusandae dolores quibusdam necessitatibus distinctio! Nesciunt asperiores minus recusandae reiciendis.',
            technologies: ['Express', 'React.js', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
            liveLink: 'https://fractos-client.vercel.app/',
            thumb: '/projectThumbs/toygo.png'
        },
        {
            name: 'Food Hunt',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus debitis, reiciendis fugit quis ipsum tenetur alias, cumque mollitia aut, nemo recusandae dolores quibusdam necessitatibus distinctio! Nesciunt asperiores minus recusandae reiciendis.',
            technologies: ['Express', 'React.js', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
            liveLink: 'https://fractos-client.vercel.app/',
            thumb: '/projectThumbs/foodHunt.png'
        }
    ]
    return (
        <SectionContainer bg={'bg-gray-100'} id={'work'}>
            <div className='flex justify-center items-center'>
                <Tag text={'Work'}></Tag>
            </div>
            <SectionSecondaryText text={'Some of the noteworthy projects I have built:'}></SectionSecondaryText>
            <div className='mt-12 space-y-6'>
                {
                    projects ?
                        projects.map(project => {
                            const { name, description, technologies, liveLink, thumb } = project;
                            return (
                                <ProjectCard name={name} description={description} technologies={technologies} liveLink={liveLink} thumb={thumb}></ProjectCard>
                            )
                        })
                        :
                        ''
                }
            </div>
        </SectionContainer>
    );
};

export default Work;