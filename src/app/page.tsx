import React from 'react'
import Hero from '@/Components/Hero'
import About from './About/page'
import Contact from './Contact/page'
import Products from './Products/page'


const page = () => {
  return (
    <div>
      {<Hero />}
      {<About />}
      {<Products />}
      {<Contact />}
    </div>
  )
}

export default page