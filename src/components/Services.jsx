import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData=[
        {
            title:'Advertising',
            description:'we trun bold ideas powerful digital solution that connect,engage.',
            icon:assets.ads_icon
        },
        {
            title:'Content marketing',
            description:'we help you excute your plan and deliver result',
            icon:assets.marketing_icon
        },
        {
            title:'Content writing',
            description:'we help you crate a marketing strategy that derives result.',
            icon:assets.content_icon
        },
        {
            title:'Social media',
            description:'we help you build a strong social media presence and engage with your audience',
            icon:assets.social_icon
        },
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 
      sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <img src={assets.bgImage2} alt=""  className='absolute -top-110 -left-70
      -z-1 dark:hidden'/>
     
     <Title title='How can we help?' desc='From strategy yo execution,we craft 
     digital solution that move your business froward.'/>
      
      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service,index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>

    </div>
  )
}

export default Services
