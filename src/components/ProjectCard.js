import Image from 'next/image';
import React from 'react';
import Tag from './Tag';
import { Link } from 'lucide-react';

const ProjectCard = () => {
    return (
        <div className='shadow-projectCard rounded-xl md:flex justify-between items-center bg-gray-50'>
            <div className='p-8 md:p-12 rounded-xl'>
                <Image src={'/me.jpg'} width={1000} height={1000} className='rounded-xl shadow-projectImg'></Image>
            </div>
            <div className='p-8 md:p-12 space-y-6'>
                <h4 className='text-gray-900 text-[18px] font-semibold'>Title</h4>
                <p className='text-gray-600 text-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus debitis, reiciendis fugit quis ipsum tenetur alias, cumque mollitia aut, nemo recusandae dolores quibusdam necessitatibus distinctio! Nesciunt asperiores minus recusandae reiciendis.</p>
                <div className='flex items-center gap-2 flex-wrap'>
                    <Tag text={'HTML'}></Tag>
                    <Tag text={'CSS'}></Tag>
                    <Tag text={'JavaScript'}></Tag>
                    <Tag text={'Node.js'}></Tag>
                    <Tag text={'Express.js'}></Tag>
                    <Tag text={'React.js'}></Tag>
                </div>
                <Link size={24}/>
            </div>
        </div>
    );
};

export default ProjectCard;