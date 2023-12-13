import React from 'react';
import SectionContainer from '../SectionContainer';
import SectionSecondaryText from '../SectionSecondaryText';
import Tag from '../Tag';
import ProjectCard from '../ProjectCard';
import Dialog from '../Dialog';

const Work = () => {
    const projects = [
        {
            name: 'Fractos',
            description: [
                'Students evaluate their learning using features mock exam, performance analysis, question archive and a leaderboard to track their peers score.',
                'Blog posts feature to improve knowledge and get to know about new and exciting things everyday.',
                'Teachers expand their ways to engage with their students using feature like batch and course management system.'
            ],
            technologies: ['NextJS', 'React.js', 'Node.js', 'JavaScript', 'MongoDB', 'Mongoose', 'ExpressJs', 'TailwindCSS', 'DaisyUI', 'StripeJS', 'JWT', 'Firebase'],
            liveLink: 'https://fractos-client.vercel.app/',
            thumb: '/projectThumbs/fractos.png',
            contribution: ['Frontend', 'Project Management', 'UI/UX'],
            githubClient: 'https://github.com/shamimhossain515419/fractos-client',
            githubServer: ''
        },
        {
            name: 'Triolingo',
            description: [
                'Instructors can share their knowledge through class management feature. Create, Delete, Update classes from dashboard.',
                'Admin dashboard to manage student and instructors and the contents of the site.',
                'Secure payment system and users are authorized using technology like JWT.'
            ],
            technologies: ['ExpressJs', 'React.js', 'Node.js', 'JavaScript', 'MongoDB', 'TailwindCSS', 'JWT', 'Axios', 'Firebase'],
            liveLink: 'https://triolingo-27485.web.app/',
            thumb: '/projectThumbs/triolingo.png',
            contribution: ['Frontend', 'ExpressJS API', 'Database'],
            githubClient: 'https://github.com/Abdur27485/Triolingo',
            githubServer: 'https://github.com/Abdur27485/triolingo-server'
        },
        {
            name: 'Toygo',
            description: [
                'Buy car from different categories and read our customers feedbacks.',
                'Seller accounts can add, remove or update their product inventory.',
                'Admin account can manage users, inventory and contents of the site.'
            ],
            technologies: ['ExpressJs', 'React.js', 'Node.js', 'JavaScript', 'MongoDB', 'TailwindCSS', 'Firebase', 'DaisyUI'],
            liveLink: 'https://toygo-27485.web.app/',
            thumb: '/projectThumbs/toygo.png',
            contribution: ['Frontend', 'ExpressJS API', 'Database'],
            githubClient: 'https://github.com/Abdur27485/Toy-Go',
            githubServer: 'https://github.com/Abdur27485/toygo-server',
        },
        {
            name: 'Food Hunt',
            description: [
                'Find best chefs of Indian cuisine.',
                'Detailed cooking method.',
                'Interactive ui for your convenience.',
                'Authentic Information.',
                'All the recipes are tasty as well as healthy too.'
            ],
            technologies: ['Express', 'React.js', 'Node.js', 'JavaScript', 'MongoDB', 'TailwindCSS', 'Firebase', 'DaisyUI'],
            liveLink: 'https://food-hunt27485.netlify.app/',
            thumb: '/projectThumbs/foodHunt.png',
            contribution: ['Frontend', 'ExpressJS API', 'Database'],
            githubClient: 'https://github.com/Abdur27485/Food-Hunt',
            githubServer: 'https://github.com/Abdur27485/food-hunt-server'
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
                            const { name, description, technologies, liveLink, thumb, contribution, githubClient, githubServer } = project;
                            return (
                                <ProjectCard name={name} description={description} technologies={technologies} liveLink={liveLink} thumb={thumb} contribution={contribution} githubClient={githubClient} githubServer={githubServer}></ProjectCard>
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