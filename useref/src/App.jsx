import React from 'react'
import UseRef from './component/UseRef'
import UseRef2 from './component/UseRef2'
import UseRefAnimationExample from './component/UseRefAnimationExample'
import Usecallback from './component/Usecallback'

const App = () => {
  return (
    <div>App
      {/* <UseRef/>
      <UseRef2/>
      <UseRefAnimationExample/> */}
        <Usecallback/>
        <childcomponent/>
      </div>
  )
}

export default App