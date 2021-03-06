import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Main } from './pages/Main/Main'
import { Dao } from './pages/Dao/Dao'
import ScrollToTop from './utilits/ScrollToTop'
import { Jobs } from './pages/Jobs/Jobs'
import { Job } from './pages/Job/Job'

export const Router = () => {
  const location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition timeout={250} classNames="fade" key={location.key}>
        <>
          <ScrollToTop />
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/dao/:id" element={<Dao />} />
            <Route path="/quests" element={<Jobs />} />
            <Route path="/job/:id" element={<Job />} />
          </Routes>
        </>
      </CSSTransition>
    </TransitionGroup>
  )
}
