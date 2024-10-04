import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; 
import 'swiper/css/pagination';
import { Pagination} from 'swiper/modules';
import "./style.css";

const Donate= ()=>{
  return (
   <main>
      <div className='container'>
      <Swiper
          modules={[Pagination]}
          grabCursor={true}
          initialSlide={2}
          centeredSlides={true} 
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide={true}
          pagination={{ el: ".swiper-pagination", clickable: true}}
          breakpoints={{
                320: { spaceBetween: 40},
                430:{  spaceBetween:50 },
                580:{spaceBetween: 70 },
                650: {spaceBetween:30 },
           }}>  
      
              <SwiperSlide className="swiper-slide slide-1">
                <div className='title'>
                  <h1>Help for Premature Baby</h1>
                </div>
                <div className="content">
                  <div className='score'> Dire </div>
                  <div className='text'>
                    <h2>Amount Needed: ₹1,00,000</h2>
                    <p>
                    This little angel was born prematurely and requires immediate medical attention in the NICU. The hospital bills are piling up, and her parents are struggling to cover the costs. Help them raise ₹1,00,000 for their baby’s survival and care.

                    </p>
                  </div>
                  <div className='genre'>
                    <span style={{"--i":1}}><button> Donate now </button></span>
            
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide slide-2">
                <div className='title'>
                  <h1> Critical Kidney Transplant</h1>
                </div>
                <div className="content">
                  <div className='score'> Safe </div>
                  <div className='text'>
                    <h2>Need:₹2,50,000</h2>
                    <p>
                    Mr. Sharma has been battling kidney failure for the past two years. He now needs an urgent kidney transplant to survive. Without this procedure, his health will continue to deteriorate rapidly. Your contribution can give him a second chance at life.
                    </p>
                  </div>
                  <div className='genre'>
                    <span style={{"--i":1}}><button> Donate now </button></span>
                   
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="swiper-slide slide-3">
                <div className='title'>
                  <h1>Treatment for Cancer</h1>
                </div>
                <div className="content">
                  <div className='score'> Safe </div>
                  <div className='text'>
                    <h2>Amount Needed: ₹5,00,000</h2>
                    <p>
                    Mrs. Patel, a loving mother of two, has been diagnosed with stage-3 breast cancer. Chemotherapy and radiation therapy are her only hope for recovery, but the costs are overwhelming for her family. Help her fight this battle and be there for her children.
                    </p>
                  </div>
                  <div className='genre'>
                    <span style={{"--i":1}}><button> Donate now </button></span>
                  
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="swiper-slide slide-4">
                <div className="title">
                  <h1>Accident Survivor’s Surgery</h1>
                </div>
                <div className="content">
                  <div className="score"> Dire  </div>
                  <div className="text">
                    <h2>Amount Needed: ₹75,000</h2>
                    <p>
                    After a tragic accident, Ravi requires multiple surgeries to heal his fractured bones. His family has exhausted their savings, and they need immediate financial assistance to proceed with his surgery and post-operative care.
                    </p>
                  </div>
                  <div className="genre">
                    <span style={{"--i":1}}><button > Donate now </button></span>
                    
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide slide-5">
                <div className="title">
                  <h1>Child with Heart Defect</h1>
                </div>
                <div className="content">
                  <div className="score"> Safe </div>
                  <div className="text">
                    <h2>Amount Needed: ₹1,50,000</h2>
                    <p>
                    Anjali, a 5-year-old girl, has been diagnosed with a congenital heart defect. Doctors have advised urgent surgery to correct the issue, but her family cannot afford the procedure. Your kindness can help Anjali live a healthy, happy life.
                    </p>
                  </div>
                  <div className="genre">
                    <span style={{"--i":1}}><button> Donate now </button></span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide slide-6">
                <div className="title">
                  <h1>Life-Saving Brain Surgery</h1>
                </div>
                <div className="content">
                  <div className="score">Safe  </div>
                  <div className="text">
                    <h2>Amount Needed: ₹3,00,000</h2>
                    <p>
                    Rohit, a young father, has been diagnosed with a brain tumor. Immediate surgery is required to remove the tumor and save his life. His family is in desperate need of funds to cover the cost of the operation. Every donation brings him closer to recovery.
                    </p>
                  </div>
                  <div className="genre">
                    <span style={{"--i":1}}><button> Donate now </button></span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide slide-7">
                <div className="title">
                  <h1>Father Battling Cancer</h1>
                </div>
                <div className="content">
                  <div className="score"> Acute </div>
                  <div className="text">
                    <h2>Amount Needed: ₹80,000</h2>
                    <p>
                    A loving father of two is diagnosed with late-stage cancer. His chemotherapy sessions are ongoing, but the family is struggling to afford the medical expenses. The hospital has asked for an advance payment of ₹1.5 Lakh for continued treatment.

</p>
                  </div>
                  <div className="genre">
                    <span style={{"--i":1}}><button> Donate now </button></span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide slide-8">
                <div className="title">
                  <h1>Widow with Heart Condition</h1>
                </div>
                <div className="content">
                  <div className="score"> Dire </div>
                  <div className="text">
                    <h2>Amount Needed: ₹70,000</h2>
                    <p>
                    This widow has been recently diagnosed with a critical heart condition and requires immediate surgery. With no source of income, her children are unable to arrange funds for her life-saving operation, which is estimated to cost around ₹1.2 Lakh.                    </p>
                  </div>
                  <div className="genre">
                    <span style={{"--i":1}}><button> Donate now </button></span>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="swiper-slide slide-9">
                <div className="title">
                  <h1> Accident Victim in ICU</h1>
                </div>
                <div className="content">
                  <div className="score"> Dire </div>
                  <div className="text">
                    <h2>Amount Needed:₹1,20,000</h2>
                    <p>
                    A 25-year-old accident victim is currently in the ICU with multiple fractures and internal injuries. His family has exhausted their savings, and the hospital requires ₹2.5 Lakh for further surgeries and rehabilitation. Immediate assistance is needed.                    </p>
                  </div>
                  <div className="genre">
                    <span style={{"--i":1}}><button> Donate now </button></span>
                  </div>
                </div>
              </SwiperSlide>

              <div className="swiper-pagination"></div>

  
</Swiper>

      </div>
   </main>
  );
};

export default Donate;