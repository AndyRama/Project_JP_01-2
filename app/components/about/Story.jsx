'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import img1 from '../../../public/images/story1.png'
import img2 from '../../../public/images/story2.jpg'
import img3 from '../../../public/images/story3.jpg'
import img4 from '../../../public/images/story1.png'
import img5 from '../../../public/images/story2.jpg'
import img6 from '../../../public/images/story3.jpg'
import img7 from '../../../public/images/story1.png'
import img8 from '../../../public/images/story2.jpg'
import img9 from '../../../public/images/story3.jpg'
import img10 from '../../../public/images/story1.png'

const storyContent = {
  column1: {
    imgs: [
      {
        img: img1,
        alt: 'Team',
        width: 1188,
        height: 1413,
        tailwindClass: 'mt-10 h-56 lg:h-96',
      },
      {
        img: img2,
        alt: 'Woman making a plan',
        width: 1188,
        height: 1413,
      },
      {
        img: img3,
        alt: 'Woman making a plan',
        width: 1188,
        height: 1413,
      },
    ],
  },
  column2: {
    imgs: [
      {
        img: img4,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img5,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img6,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img7,
        alt: 'Team metting',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
    ],
  },
  column3: {
    imgs: [
      {
        img: img8,
        alt: 'Man writting a plan',
        width: 1188,
        height: 1413,
      },
      {
        img: img9,
        alt: 'Production',
        width: 1188,
        height: 1413,
      },
      {
        img: img10,
        alt: 'Man writting a plan',
        width: 1188,
        height: 1413,
      },
    ],
  },

  storyText: {
    heading: 'Crafting Spaces, Shaping Dreams',
    p1: 'Envisioned by a group of passionate architects, our story is one of perseverance and boundless creativity. We started as a small team with big dreams, driven by the belief that architecture holds the power to shape lives and communities. Through years of dedication and unwavering commitment, we have evolved into a dynamic force, seamlessly blending aesthetics with functionality to create spaces that inspire and endure.',
    p2: 'Our journey has been defined by our relentless pursuit of excellence and our eagerness to embrace new challenges. From the early projects that ignited our spark to the iconic structures that now stand as testaments to our vision, every step of our journey is etched with a passion for innovation. Today, we stand on the shoulders of our accomplishments, guided by the same spirit that set us on this path – to shape a world that celebrates the harmony of design, environment, and human experience.',
    signature: '/images/Bill_Smith_Signature.svg',
    name: 'Bill Smith',
    roleTitle: 'CEO and Co-Founder',
  },
}

const Story = ({ className }) => {
  return (
    <section>
      <div className="container px-4 mx-auto mt-32">
        <div className="md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7 ">
          <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0 ">
            {storyContent.column1.imgs.map((item, index) => {
              index *= 0.5
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${item.tailwindClass ? item.tailwindClass : ''}
                      !max-w-full object-cover object-center`}
                  />
                </motion.div>
              )
            })}
          </div>

          <div className="md:w-4/12 space-y-7 mb-7 md:mb-0">
            {storyContent.column2.imgs.map((item, index) => {
              index *= 0.5
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${item.tailwindClass ? item.tailwindClass : ''}
                      !max-w-full object-cover object-center`}
                  />
                </motion.div>
              )
            })}
          </div>

          <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
            {storyContent.column3.imgs.map((item, index) => {
              index *= 0.5
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${item.tailwindClass ? item.tailwindClass : ''}
                      !max-w-full object-cover object-center`}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
