'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BiLayer } from 'react-icons/bi'

const CardPricingContent = {
  step: [
    {
      title: 'Pricing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ipsum et repellat!',
      btn: {
        href: '/prestations',
        label: "Plus d'information",
      },
    },
  ],
}

const CardPricing = ({ className }) => {
  return (
    <section className={className}>
      <div className="w-[360px] md:w-[330px] xl:w-[350px] xl:ml-[-16px] md:pl-0">
        {CardPricingContent.step.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.2,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: 0.1 }}
            className="p-4 group duration-300 bg-[#2F2E2E] relative overflow-hidden hover:shadow-2xl rounded-md w-auto h-[460px]"
          >
            <div className="px-2 lg:px-4 mt-10 mb-10 relative flex flex-col gap-3 items-start">
              <span className="text-2xl flex items-center">
                <BiLayer className="mr-2 border-dashed border-2 border-orange-500 rounded-sm text-orange-500 bg-orange-500 bg-opacity-10" />
                <h2 className="text-3xl text-white">Prestations</h2>
              </span>
              <p className="text-justify leading-relaxed text-[15px] text-gray-500 mb-2 duration-300 transition-all ease-in-out group-hover:text-white">
                {step.description}
              </p>

              <Link href={step.btn.href} className="text-white">
                {step.btn.label}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CardPricing
