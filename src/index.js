import React from 'react'
import ReactDom from 'react-dom'


import './index.css'

// Import Components 
import GameStartSection from './components/game-start-section'
import GameSection from './components/game-section'
import {MyContext, useData} from './myContext'
import loader from './loading-buffering.gif'
import Win from './components/Win'
import Loss from './components/Loss'

const loaderStyles = {
  position : 'absolute',
  top : '50%',
  left : '50%',
  transform : 'translate(-50%,-50%)',
  width : 50,
  height : 50,
}

function  App() {

  const {
    isLoading,
    sections : {
        startSection,
        gameSection
    },
    result : {
      loss,
      win
    }
  } = useData()

  if(isLoading || isLoading === null) {
    return <img style={loaderStyles} src={loader} alt='loading ...' />
  }

  return (
    <>
        {startSection ? <GameStartSection /> : null}  
        {gameSection ? <GameSection /> : null} 
        {loss ? <Loss /> : null}
        {win ? <Win /> : null}
    </>  
  )

}


ReactDom.render(
      <MyContext>
        <App /> 
      </MyContext>
,document.getElementById('root'))


// Problems :
  /*
  --- stay the same data (questions) when return back from (loss/win)
  --- the timer start from 4s
  */