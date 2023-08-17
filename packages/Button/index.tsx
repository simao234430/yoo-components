
import {ButtonProps} from './interface'
 

function Button(props: ButtonProps) {
  const { children, style} = props
  const InnerContent = (
    <>
      { children}
    </>
  );
  return (
    <button
 
      style={style}
 
    >
      {InnerContent}
    </button>
  );
}


export default Button

