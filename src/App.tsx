import { Component, createEffect } from 'solid-js'
import { createSignal } from 'solid-js'

const App: Component = () => {
  const [state, setState] = createSignal(0)
  const onIncrease = () => setState((state) => state + 1)
  createEffect(() => {
    console.log(state())
  })
  return (
    <div class='flex flex-col justify-center items-center h-screen gap-8'>
      <p class='text-4xl text-teal-700 text-center'>{state}</p>
      <button
        class='p-2 bg-teal-600 rounded-lg hover:scale-125 duration-200'
        type='button'
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  )
}

export default App
