'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import MyComponent from '@/components/smoothScroller';
import BannerSection from '@/components/banner';
import ModrenDays from '@/components/modernDays';
import Link from 'next/link';
import HomeExplorersAnimation from '@/components/middleAnimation';
import BottomAnimation from '@/components/bottomAnimation';
import JoinUs from '@/components/movingLine';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  // const main = useRef<HTMLElement | any>();

  // useGSAP(
  //   () => {
  //     const boxes = gsap.utils.toArray('.box');
  //     boxes.forEach((box) => {
  //       gsap.to(box, {
  //         x: 150,
  //         scrollTrigger: {
  //           trigger: box,
  //           start: 'bottom bottom',
  //           end: 'top 20%',
  //           scrub: true,
  //           // markers: true,
  //         },
  //       });
  //     });
  //   },
  //   { scope: main }
  // );

  return (
    <div>
      {/* <section className="section flex-center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className="section flex-center column" ref={main}>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
      </div>
      <section className="section"></section> */}

      <h1>Hello stack blitz</h1>
          <MyComponent>
            <div className='home' >
              <BannerSection />
               <ModrenDays />
                <JoinUs />
               <HomeExplorersAnimation />
               <BottomAnimation />
             {/* <ClientSliderWrapper /> */}
               {/*<Testimonials />
              <JoinUs /> */}
              <Link href={'/test-route'}>Test Route</Link>
            </div>
          </MyComponent>
    </div>
  );
}
