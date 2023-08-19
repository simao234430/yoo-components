import React,  { useEffect, createContext } from 'react';
import type { ConfigProviderProps } from './interface';
import omit from '../_util/omit';
import { setConfigProviderProps } from '../Modal/config';
import useMergeProps from '../_util/hooks/useMergeProps';

 
 
const defaultProps: ConfigProviderProps = {
 
  prefixCls: 'arco',
 
  size: 'default',
 
 
};

const componentConfig = {};

export const ConfigContext = createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 'arco'}-${componentName}`,
  ...defaultProps,
});

function ConfigProvider(baseProps: ConfigProviderProps) {
  const props = useMergeProps<ConfigProviderProps>(baseProps, defaultProps, componentConfig);
  const {  prefixCls, children  } = props;

  // useEffect(() => {
  //   setTheme(theme);
  // }, [theme]);

  useEffect(() => {
 
  }, [prefixCls ]);

  function getPrefixCls(componentName: string, customPrefix?: string) {
    return `${customPrefix || prefixCls}-${componentName}`;
  }

  const config: ConfigProviderProps = {
    ...omit(props, ['children']),
    getPrefixCls,
  };

  useEffect(() => {
    setConfigProviderProps({  prefixCls });
  }, [ prefixCls]);

  let child = children;
 
  return <ConfigContext.Provider value={config}>{child}</ConfigContext.Provider>;
}

ConfigProvider.ConfigContext = ConfigContext;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;

export const ConfigConsumer = ConfigContext.Consumer;

export { ConfigProviderProps } 
