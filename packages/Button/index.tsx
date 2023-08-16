
import type {ButtonProps} from './interface'
 

function Button(props: ButtonProps) {
  const { children, ...rest } = props

  return <button {...rest}>{children}</button>
}

export default  Button