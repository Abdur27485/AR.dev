import React from 'react';
import SectionTitle from '../Tag';
import Image from 'next/image';
import SectionContainer from '../SectionContainer';
import Link from 'next/link';
import SectionSecondaryText from '../SectionSecondaryText';
import Tag from '../Tag';

const Skills = () => {
    const skillSet = [
        {
            name: 'JavaScript',
            logo: '/logos/icon-javascript.svg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            name: 'React',
            logo: '/logos/icon-react.svg',
            link: 'https://react.dev/',
        },
        {
            name: 'Express.js',
            logo: '/logos/icon-express.svg',
            link: 'https://expressjs.com/',
        },
        {
            name: 'Node.js',
            logo: '/logos/icon-nodejs.svg',
            link: 'https://nodejs.org/en',
        },
        {
            name: 'MongoDB',
            logo: '/logos/icon-mongodb.svg',
            link: 'https://www.mongodb.com/',
        },
        {
            name: 'Next.js',
            logo: '/logos/icon-nextjs.svg',
            link: 'https://nextjs.org/',
        },
        {
            name: 'Firebase',
            logo: '/logos/firebase-icon.svg',
            link: 'https://firebase.google.com/',
        },
        {
            name: 'TailwindCSS',
            logo: '/logos/icon-tailwindcss.svg',
            link: 'https://tailwindcss.com/',
        },
        {
            name: 'GIT',
            logo: '/logos/icon-git.svg',
            link: 'https://git-scm.com/',
        },
    ]
    return (
        <SectionContainer>
            <div className='flex justify-center items-center'>
                <Tag text={'Skills'}></Tag>
            </div>
            <SectionSecondaryText text={'The skills, tools and technologies I am really good at:'}></SectionSecondaryText>
            <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
                {
                    skillSet ?
                        skillSet.map(skill => {
                            const { link, logo, name } = skill;
                            return (
                                <div className='flex flex-col items-center gap-2'>
                                    <Link href={link}>
                                        <Image src={logo} width={name === 'TailwindCSS' ? (106) : (name === 'MongoDB' ? 31 : 64)} height={64} className='transition-transform duration-300 md:hover:scale-110 mx-auto'></Image>
                                    </Link>
                                    <p className='text-normal text-base md:text-lg'>{name}</p>
                                </div>
                            )
                        })
                        :
                        <div>
                            <p className='text-gray-600 text-xl'>No Skills</p>
                        </div>
                }
            </div>
        </SectionContainer>
    );
};

export default Skills;