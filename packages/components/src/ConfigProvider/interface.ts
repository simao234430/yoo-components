import { ReactNode } from 'react';
 
import { ButtonProps } from '../Button/interface';

export type ThemeConfig = Record<string, any>;

export type ComponentConfig = {
 
  Button?: ButtonProps;
 
};

/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps {
    /**
   * @zh 视图的表现形式是从右开始向左结束。
   * @en View starts from the right and ends on the left.
   * @version 2.36.0
   */
    rtl?: boolean;
  /**
   * @zh 当按钮中是两个汉字时，自动在两个汉字中添加一个空格。
   * @en When there are two Chinese characters in the button, a space is automatically added between two Chinese characters.
   * @version 2.3.0
   */
  autoInsertSpaceInButton?: boolean;
  /**
   * @zh 用于全局配置所有组件的默认参数
   * @en Default parameters for global configuration of all components
   * @version 2.23.0
   */
  componentConfig?: ComponentConfig;
 
  /**
   * @zh 主题配置
   * @en Theme Configuration
   */
  theme?: ThemeConfig;
  /**
   * @zh 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @en Configure the default size of the component, which will only take effect for components that support the `size` property.
   * @defaultValue default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   * @defaultValue arco
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
   
  children?: ReactNode;
}
