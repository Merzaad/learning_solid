import { Component, For, JSX } from 'solid-js'

type Props = {
  list: any[]
  onClick: JSX.EventHandler<HTMLElement, MouseEvent>
}
const List: Component<Props> = (props) => {
  return (
    <div class="flex flex-col justify-center items-center rounded-md bg-zinc-100 gap-5">
      <For each={props.list}>
        {(item, index) => (
          <div
            class="hover:bg-zinc-500 duration-150 hover:text-zinc-100 rounded-sm p-3 cursor-pointer"
            id={String(item)}
            onClick={props.onClick}
          >
            {item}
          </div>
        )}
      </For>
    </div>
  )
}

export default List
