import clsx from 'clsx'
 
 
import { forwardRef } from 'react'
 
 
interface TagProps
extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
style?: CSSProperties
className?: string | string[]
/**
 * @zh 设置标签背景颜色
 * @en The background color of Tag
 */
color?: Colors
}

type Colors = 'red' | 'orange' | 'green' | 'blue'

const Tag: React.ForwardRefRenderFunction<HTMLDivElement | null, TagProps> = (
  props,
  ref
) => {
  const { className, style, children, color, ...rest } = props
 
  return (
    <div
    ref={ref}
      style={style}
      {...rest}
      className={clsx(className,'s-tag', `s-tag-${color}`)}
    >
      {children}
    </div>
  )
}

const TagComponent  =  forwardRef <HTMLDivElement | null, ButtonProps>(Tag);

TagComponent.displayName = 'Tag'

export default TagComponent
