import React, { forwardRef, useContext } from 'react';
import type { DividerProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import { ConfigContext } from '../ConfigProvider';
import cs from '../_util/classNames';
import './style/index'

const defaultProps: DividerProps = {
  type: 'horizontal',
  orientation: 'center',
};

function Divider(baseProps: DividerProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<DividerProps>(baseProps, defaultProps, componentConfig?.Divider);
  const { children, style, className, type, orientation, ...rest } = props;

  const prefixCls = getPrefixCls('divider');
  const classNames = cs(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: children,
      [`${prefixCls}-with-text-${orientation}`]: children && orientation,
    },
    className
  );

  return (
    <div role="separator" ref={ref} className={classNames} style={style} {...rest}>
      {children && type === 'horizontal' ? (
        <span className={`${prefixCls}-text ${prefixCls}-text-${orientation}`}>{children}</span>
      ) : null}
    </div>
  );
}

const DividerComponent = forwardRef<unknown, DividerProps>(Divider);

DividerComponent.displayName = 'Divider';

export default DividerComponent;

export { DividerProps };
