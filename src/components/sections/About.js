import React from 'react';
import SectionContainer from '../SectionContainer';
import MyPic from '../MyPic';
import Tag from '../Tag';

const About = () => {
    return (
        <SectionContainer bg={'bg-gray-50'} id={'about'}>
            <div className='flex justify-center items-center'>
                <Tag text={'About'}></Tag>
            </div>
            <div className='md:flex flex-row mt-12'>
                <MyPic></MyPic>
                <div className='mb-12 md:mb-0 md:w-1/2'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-900'>Curious about me? Here you have it:</h3>
                    <div className='space-y-4 text-base text-gray-600'>
                        <p>I'm a passionate, determined, and curious who specializes in MERN stack development. I am very currently curious about constantly learn and brush up my technical and other related skills. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                        <br />
                        <p>In 2023, Being curious about web and its awesomeness I have decided to learn web development. After a searching a lot in the internet I came across of this amazing course by Programming Hero which is 'Complete Web Development Course with Jhankar Mahbub'.</p>
                        <br />
                        <p>After 6 months, I have successfully completed the course and now I'm brushing my knowledge and looking for opportunities where I can get a dynamic Environment to help me build up my career in this Web Sector.</p>
                        <br />
                        <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello!😉</p>
                    </div>
                    <button className=' mt-4 text-2xl md:text-3xl lg:text-4xl inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800'>Contact Me</button>
                </div>
            </div>
        </SectionContainer>
    );
};

export default About;