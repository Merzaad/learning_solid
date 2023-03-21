import { Component, createEffect, createMemo, createSignal, onCleanup, onMount } from 'solid-js'
import Button from '../components/Button'

const App: Component = () => {
  const [state, setState] = createSignal(0)
  const memo = createMemo(() => state() + 1)
  const onIncrease = () => setState((state) => state + 1)
  onMount(() => {
    console.log('mount')
  })
  onCleanup(() => {
    console.log('cleanup')
  })
  createEffect(() => {
    console.log('effect', state())
  })
  createEffect(() => {
    // why before effect ?
    console.log('memo', memo())
  })

  return (
    <div class="flex flex-col justify-center items-center h-screen gap-8">
      <p class="text-4xl text-teal-700 text-center">{state}</p>
      <Button onClick={onIncrease}>add</Button>
    </div>
  )
}

export default App
