import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MediaDetail from '../component/Media/MediaDetail'
import Media from '../component/Media/Media'
import FAQ from '../component/FAQ'
const Router = () => {
  return (

    <>
        <Routes>
        <Route path='/MediaDetail/:id' element={<MediaDetail/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/faq'  element={<FAQ/>}/>
        </Routes>
    </>

  )
}

export default Router