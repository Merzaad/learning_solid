import { Component, JSX } from 'solid-js'

type Props = {
  children: JSX.Element
  onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
}

const Button: Component<Props> = (props: Props) => {
  const { children, onClick } = props
  return (
    <button
      class="p-2 bg-teal-600 rounded-lg hover:scale-125 duration-200"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
