import React from 'react'

import {Loader, Card, FormField} from "../components";

const Home = () => {
  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#22233]'>Community Showcase</h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Browse through a collection of imaginative and cisually stunning images generated by DALL-E AI</p>
        </div>
        <div className='mt-16'>
            <FormField/>
        </div>
    </section>
  )
}

export default Home