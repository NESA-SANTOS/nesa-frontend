"use client";

import React from 'react';
import Image from 'next/image'
import styles from './howtojudge.module.css';
import { useRouter } from 'next/navigation';
import Button from '@/components/Common/Button';

export default function JudgingPanel() {
  const router = useRouter();
  return (
      <div className="bg-amber-50 px-6 py-12 md:py-16">

        <div className={styles.insidecont}>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black mb-6">
                  CALL FOR APPLICATIONS & NOMINATIONS:
                <br />
                   Join the Prestigious NESA Africa 2025 Judging Panel!
                 </h2>
          
            
                   <p className="text-gray-800 mb-6 font-normal">
                   The New Education Standard Award Africa 2025, hosted by SCEF Nigeria Local Chapter, invites 
               distinguished professionals, educators, policymakers, corporate leaders, and education advocates to 
               apply or be nominated to serve as volunteer judges for this year's awards.
             </p>
          </div>

          <div className={styles.grid}>
                 {/* LEFT COLUMN */}
              <div className={styles.leftcol}>
              <p className="text-gray-800 mb-6">
               This is an opportunity to contribute to shaping Africa's 
               educational excellence, while being recognized as a 
               NESA Africa Ambassador with exclusive access to 
               networking opportunities, VIP events, and leadership 
               recognition.
             </p>
            
             <p className="text-gray-800 mb-8">
               Judging is a volunteer activity, but corporate sponsors 
               can nominate company representatives as part of their 
               CSR (Corporate Social Responsibility) engagement in 
               education.
             </p>
            
            <div className="flex flex-wrap gap-4">
              <Button text="Apply To Judge" variant="filled" onClick={() => router.push("/judgeapply")} className="bg-amber-400 hover:bg-amber-500 text-black font-medium py-3 px-8 rounded-md transition-colors" />
                
              
              <button onClick={()=> router.push("Judgesnominate")} className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-3 px-8 rounded-md transition-colors">
                Nominate A Judge
              </button>
            </div>
          </div>
          
          {/* Right Image Column */}
          <div className="lg:w-1/3 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-1 -right-2 -bottom-2 -left-2 bg-black rounded-xl -z-10"></div>
              <div className=" rounded-xl overflow-hidden">
                <Image 
                  src="/images/judgeguide.png"
                  width={30} 
                   height={80}
                   alt="Graduation cap on stack of books with medal" 
                   className={styles.img}
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    // <div className="bg-amber-50 px-6 py-12 md:py-16">
    //   <div className="max-w-6xl mx-auto">
    //     <div className={styles.cont}>
    //       {/* Left Content Column */}
    //       <div className="lg:w-2/3">
    //         <div className={styles.topText}>
    //         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
    //           CALL FOR APPLICATIONS & NOMINATIONS:
    //           <br />
    //           Join the Prestigious NESA Africa 2025 Judging Panel!
    //         </h2>
          
            
    //         <p className="text-gray-800 mb-6">
    //           The New Education Standard Award Africa 2025, hosted by SCEF Nigeria Local Chapter, invites 
    //           distinguished professionals, educators, policymakers, corporate leaders, and education advocates to 
    //           apply or be nominated to serve as volunteer judges for this year's awards.
    //         </p>
    //         </div>

    //         <div>
            
    //         <p className="text-gray-800 mb-6">
    //           This is an opportunity to contribute to shaping Africa's 
    //           educational excellence, while being recognized as a 
    //           NESA Africa Ambassador with exclusive access to 
    //           networking opportunities, VIP events, and leadership 
    //           recognition.
    //         </p>
            
    //         <p className="text-gray-800 mb-8">
    //           Judging is a volunteer activity, but corporate sponsors 
    //           can nominate company representatives as part of their 
    //           CSR (Corporate Social Responsibility) engagement in 
    //           education.
    //         </p>
            
    //         <div className="flex flex-wrap gap-4">
    //           <a href="#" className="bg-amber-400 hover:bg-amber-500 text-black font-medium py-3 px-8 rounded-md transition-colors">
    //             Apply To Judge
    //           </a>
    //           <a href="#" className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-3 px-8 rounded-md transition-colors">
    //             Nominate A Judge
    //           </a>
    //         </div>
    //                       
    //             <Image 
    //               src="/images/judgeguide.png"
    //               width={30} 
    //               height={80}
    //               alt="Graduation cap on stack of books with medal" 
    //               className="w-full h-auto max-w-[600px] mx-auto mt-8"
    //             />
    //           </div>
    //          

    //       </div>
          
    //     </div>
    //   </div>
    // </div>
  );
}