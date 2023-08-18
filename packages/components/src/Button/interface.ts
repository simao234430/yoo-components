/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CSSProperties,
  HTMLProps,
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react'

export type BaseButtonProps = {
  style?: CSSProperties

  children?: ReactNode
}
export type AnchorButtonProps = {
  href: string
  target?: string
  anchorProps?: HTMLProps<HTMLAnchorElement>
} & BaseButtonProps &
  Omit<AnchorHTMLAttributes<any>, 'type' | 'onClick' | 'className'>

export type FinalButtonProps = {
  /**
   * @zh 按钮原生的 html type 类型
   * @en html button type
   * @defaultValue button
   */
  htmlType?: 'button' | 'submit' | 'reset'
} & BaseButtonProps &
  Omit<ButtonHTMLAttributes<any>, 'type' | 'onClick' | 'className'>

/**
 * @title Button
 */
export type ButtonProps = Partial<FinalButtonProps & AnchorButtonProps>

// export type AnchorButtonProps = {
//   href: string;
//   target?: string;
//   anchorProps?: HTMLProps<HTMLAnchorElement>;
// } & BaseButtonProps &
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   Omit<AnchorHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

// export type FinalButtonProps = {
//   /**
//    * @zh 按钮原生的 html type 类型
//    * @en html button type
//    * @defaultValue button
//    */
//   htmlType?: 'button' | 'submit' | 'reset';
// } & BaseButtonProps &
//   Omit<ButtonHTMLAttributes<unknown>, 'type' | 'onClick' | 'className'>;

// /**
//  * @title Button
//  */
// export type ButtonProps = Partial<FinalButtonProps & AnchorButtonProps>;
