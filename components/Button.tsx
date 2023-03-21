import { Component, JSX } from 'solid-js'

type Props = {
  children: JSX.Element
  onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
}

const Button: Component<Props> = (props) => {
  const { children, onClick } = props
  return (
    <button
      class="p-4  bg-zinc-700 rounded-lg hover:shadow-sm hover:shadow-zinc-700 hover:scale-105 active:scale-100 active:text-gray-400  duration-200 text-white"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
