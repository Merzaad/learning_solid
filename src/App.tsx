import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  onCleanup,
  onMount,
} from 'solid-js'
import Button from '../components/Button'
import List from '../components/List'

const App: Component = () => {
  const [state, setState] = createSignal(0)
  const [list, setList] = createSignal([0, 1, 2])
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
  const onListItemClick: JSX.EventHandler<HTMLElement, MouseEvent> = (event) => {
    const id = Number(event.target.id)
    setList((prev) => [id, ...prev.filter((x) => x !== id)])
  }
  return (
    <div class="flex flex-col justify-center items-center h-screen gap-8">
      <p class="text-4xl text-teal-700 text-center">{state}</p>
      <Button onClick={onIncrease}>add</Button>
      <List list={list()} onClick={onListItemClick} />
    </div>
  )
}

export default App
