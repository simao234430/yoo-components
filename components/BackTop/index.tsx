import React, { forwardRef, useContext } from 'react';
import type { BackTopProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import { ConfigContext } from '../ConfigProvider';
import cs from '../_util/classNames';
import './style/index'

const defaultProps: BackTopProps = {

};
  
function BackTop(baseProps: BackTopProps, ref) {
  const { getPrefixCls } = useContext(ConfigContext);
  const props = useMergeProps<BackTopProps>(baseProps, defaultProps, {}); 
  const { className } = props;

  const prefixCls = getPrefixCls('');

  const classNames = cs(
    prefixCls,
    className
  );
  return(
    <div className={classNames} ref={ref}>
    </div>
  )
}

const BackTopComponent = forwardRef<unknown, BackTopProps>(BackTop);

  
BackTopComponent.displayName = 'BackTop';

export default BackTopComponent;