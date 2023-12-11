import Image from 'next/image';
import React from 'react';
import Tag from './Tag';
import { Link } from 'lucide-react';

const ProjectCard = ({ name, description, technologies, liveLink, thumb, contribution }) => {
    return (
        <div className='shadow-projectCard rounded-xl md:flex justify-between items-center bg-gray-50'>
            <div className='p-8 md:p-12 md:w-1/2 rounded-xl'>
                <Image src={thumb} width={1000} height={1000} className='rounded-xl shadow-projectImg'></Image>
            </div>
            <div className='p-8 md:p-12 space-y-6 md:w-1/2'>
                <h4 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>{name}</h4>
                <div className='my-4'>
                    <h3 className='text-xl text-gray-900 md:text-2xl font-semibold'>Worked On</h3>
                    <div className='flex items-center mt-2'>
                        <Tag text={contribution} type={''}></Tag>
                    </div>
                </div>
                <p className='text-gray-600 text-[16px]'>{description}</p>
                <div className='flex items-center gap-2 flex-wrap'>
                    {
                        technologies ?
                            technologies.map(tech => {
                                return (
                                    <Tag text={tech} type={'tag'}></Tag>
                                )
                            })
                            :
                            ''
                    }
                </div>
                <Link href={liveLink}>
                    <Link size={24} />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;