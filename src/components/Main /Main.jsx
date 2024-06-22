import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Layout from '../Layout/Index'
import Swipers from './Section'

const Main = () => {
  return (
    <Layout>
       <main>
        <Swipers/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </main>
    </Layout>
  )
}

export default Main