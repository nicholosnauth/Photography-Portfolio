import React from 'react'
import Image from 'next/image'

const Porfolio = () => {
  return (
    <div className='max=w=[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Portraits</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 md:gap-4'> 
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                alt='/'
                layout='responsive'
                width='324'
                height='405'
                />
            
            </div>

            <div className='w-full h-full'>
            <Image 
            src='https://images.unsplash.com/photo-1591176557752-f84109c388ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt='/' 
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            />
            </div>

            <div className='w-full h-full'>
            <Image 
            src='https://images.unsplash.com/photo-1612298887988-2a8e9e5064f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt='/' 
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            />
            
            </div>

            <div className='w-full h-full'>
            <Image 
            src='https://images.unsplash.com/photo-1509161926526-e95cb62b9849?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxiTzA2M3NPTEdETXx8ZW58MHx8fHx8' 
            alt='/' 
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            />
            
            </div>

            <div className='w-full h-full'>
            <Image 
            src='https://images.unsplash.com/photo-1622405382617-592e8c8187c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8Yk8wNjNzT0xHRE18fGVufDB8fHx8fA%3D%3D' 
            alt='/' 
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'

            />
            
            </div>
        </div>
    </div>
  )
}

export default Porfolio