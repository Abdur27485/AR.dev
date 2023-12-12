import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Tag from './Tag';
import { InfoIcon, Link } from 'lucide-react';
import Dialog from './Dialog';

const ProjectCard = ({ name, description, technologies, liveLink, thumb, contribution }) => {
    const [dialogShow, setDialogShow] = useState(false);
    return (
        <div className='shadow-projectCard rounded-xl md:flex justify-between items-center bg-gray-50'>
            <div className='p-8 md:p-12 md:w-1/2 rounded-xl'>
                <img src={thumb} className={`rounded-xl  w-full shadow-projectImg`}></img>
            </div>
            <div className='p-8 md:p-12 space-y-6 md:w-1/2'>
                <h4 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex justify-between items-center'>
                    <span>{name}</span>
                    <InfoIcon onClick={() => setDialogShow(true)} size={56} cursor={'pointer'} className='hover:border-gray-600 transition-all duration-200 rounded-full border-white border-8 '></InfoIcon>
                </h4>
                <div className='my-4'>
                    <h3 className='text-xl text-gray-900 md:text-2xl font-semibold'>Worked On</h3>
                    <div className='flex items-center flex-wrap mt-2 gap-2'>
                        {contribution?.map((text) => {
                            console.log(text)
                            return (
                                <Tag text={text} type={''}></Tag>
                            )
                        })}
                    </div>
                </div>
                {/* <div className='text-gray-600 text-base md:text-xl flex gap-y-4 flex-col flex-nowrap'>
                    {description.map(item => {
                        return (
                            <p className='flex items-top gap-2'>
                                <Image className=' self-start' src={'/bullet-point 24.png'} width={24} height={24}></Image>
                                {item}
                            </p>
                        )
                    })}
                </div> */}
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
                <Link target='_blank' href={liveLink}>
                    <Link size={24} />
                </Link>
            </div>
            <Dialog display={dialogShow} setDialogShow={setDialogShow} content={description}></Dialog>
        </div>
    );
};

export default ProjectCard;