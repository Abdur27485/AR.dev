import Image from 'next/image';
import React from 'react';
import Tag from './Tag';
import { Link } from 'lucide-react';

const ProjectCard = ({ name, description, technologies, liveLink, thumb }) => {
    return (
        <div className='shadow-projectCard rounded-xl md:flex justify-between items-center bg-gray-50'>
            <div className='p-8 md:p-12 md:w-1/2 rounded-xl'>
                <Image src={thumb} width={1000} height={1000} className='rounded-xl shadow-projectImg'></Image>
            </div>
            <div className='p-8 md:p-12 space-y-6 md:w-1/2'>
                <h4 className='text-gray-900 text-[18px] font-semibold'>{name}</h4>
                <p className='text-gray-600 text-[16px]'>{description}</p>
                <div className='flex items-center gap-2 flex-wrap'>
                    {
                        technologies ?
                            technologies.map(tech => {
                                return (
                                    <Tag text={tech}></Tag>
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