import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slideImg1 from "../../../assets/Course/CourseSlider1.jpg"
import slideImg2 from "../../../assets/Course/CourseSlider2.jpg"
import slideImg3 from "../../../assets/Course/CourseSlider3.jpg"
import slideImg4 from "../../../assets/Course/CourseSlider4.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useEffect } from 'react';


const CategorySlider = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
        });
    }, []);

    return (

        <div className='mb-28 mt-16'>
            <div data-aos="zoom-out-down">
                <SectionTitle
                    subHeading={"May you like"}
                    heading={"Popular Courses"}
                ></SectionTitle>
            </div>
            <div data-aos="zoom-out-left" className='mx-44'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    speed={1000}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <div className='p-10 rounded-2xl bg-white bg-opacity-20 backdrop-blur-lg border'>
                                <div className='mb-10'>
                                    <h3 className='text-3xl'>Learning Arabic Course</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, cum commodi et maxime corrupti facere sequi dolorum harum eos sint possimus excepturi debitis distinctio corporis autem aut assumenda pariatur ipsam. Sunt harum dolores culpa ratione nisi, laborum iusto dolore sit recusandae ipsum. Asperiores cupiditate saepe distinctio sapiente accusantium repudiandae quam!</p>
                                </div>
                                <img className='w-3/5 m-auto h-[300px] rounded-xl' src={slideImg1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='p-10 rounded-2xl bg-white bg-opacity-20 backdrop-blur-lg border'>
                                <div className='mb-10'>
                                    <h3 className='text-3xl'>Quran Elementery Course</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, cum commodi et maxime corrupti facere sequi dolorum harum eos sint possimus excepturi debitis distinctio corporis autem aut assumenda pariatur ipsam. Sunt harum dolores culpa ratione nisi, laborum iusto dolore sit recusandae ipsum. Asperiores cupiditate saepe distinctio sapiente accusantium repudiandae quam!</p>
                                </div>
                                <img className='w-3/5 m-auto h-[300px] rounded-xl' src={slideImg2} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='p-10 rounded-2xl bg-white bg-opacity-20 backdrop-blur-lg border'>
                                <div className='mb-10'>
                                    <h3 className='text-3xl'>Forz-e ain</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, cum commodi et maxime corrupti facere sequi dolorum harum eos sint possimus excepturi debitis distinctio corporis autem aut assumenda pariatur ipsam. Sunt harum dolores culpa ratione nisi, laborum iusto dolore sit recusandae ipsum. Asperiores cupiditate saepe distinctio sapiente accusantium repudiandae quam!</p>
                                </div>
                                <img className='w-3/5 m-auto h-[300px] rounded-xl' src={slideImg3} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='p-10 rounded-2xl bg-white bg-opacity-20 backdrop-blur-lg border'>
                                <div className='mb-10'>
                                    <h3 className='text-3xl'>Fiqhus Saom</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, cum commodi et maxime corrupti facere sequi dolorum harum eos sint possimus excepturi debitis distinctio corporis autem aut assumenda pariatur ipsam. Sunt harum dolores culpa ratione nisi, laborum iusto dolore sit recusandae ipsum. Asperiores cupiditate saepe distinctio sapiente accusantium repudiandae quam!</p>
                                </div>
                                <img className='w-3/5 m-auto h-[300px] rounded-xl' src={slideImg4} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    );
};

export default CategorySlider;