import React from 'react'
import B from '@/components/B'
import A from '@@packages/components/A'
import C from '@@packages/components/C'
import useD from '@@packages/hooks/useD'
function App() {
  const state = useD()
  return (
    <React.Fragment>
      <A />
      <B />
      <C />
      {state}
    </React.Fragment>
  )
}

export default App
