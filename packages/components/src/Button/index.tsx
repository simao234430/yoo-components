 
import React, { forwardRef, useContext, useRef } from 'react';
import type { ButtonProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import { ConfigContext } from '../ConfigProvider';
import cs from '../_util/classNames';
import './style/index'

const defaultProps: ButtonProps = {
    htmlType: 'button',
    type: 'default',
    shape: 'square',
  };
  

function Button(baseProps: ButtonProps,ref:any) {

    const {
      getPrefixCls,
        size: ctxSize,
 
 
      } = useContext(ConfigContext);
    const props = useMergeProps<ButtonProps>(baseProps, defaultProps, {});

    const { children, style,type,htmlType,size,className } = props;
    const InnerContent = <>{children}</>;

    const innerButtonRef = useRef();
    const buttonRef = ref || innerButtonRef;
    // const prefixCls = "test"
    const prefixCls = getPrefixCls('btn');
    const _type = type === 'default' ? 'secondary' : type;

    const classNames = cs(
      prefixCls,
      `${prefixCls}-${_type}`,
      `${prefixCls}-size-${size || ctxSize}`,
      className
    );
    return (
        <button
          ref={buttonRef}
 
          style={style}
          className={classNames}
          type={htmlType}
 
        >
          {InnerContent}
        </button>
      );
}

const ForwardRefButton = forwardRef<unknown, ButtonProps>(Button);

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton & {
    __BYTE_BUTTON: boolean;

    };
  




ButtonComponent.displayName = 'Button';

export default ButtonComponent;

export { ButtonProps }
export { ConfigContext } 