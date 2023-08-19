import { CSSProperties, HTMLProps, ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
export type BaseButtonProps = {
    style?: CSSProperties;
    className?: string | string[];
    children?: ReactNode;
    /**
   * @zh
   * 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。
   * @en
   * A variety of button types are available: `primary`, `secondary`, `dashed`,
   * `text`, `linear` and `default` which is the secondary.
   * @defaultValue default
   */
    type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';
    /**
     * @zh 按钮状态
     * @en Status of the button
     * @defaultValue default
     */
    status?: 'warning' | 'danger' | 'success' | 'default';
    /**
     * @zh 按钮的尺寸
     * @en Size of the button
     * @defaultValue default
     */
    size?: 'mini' | 'small' | 'default' | 'large';
    /**
     * @zh 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形
     * @en Three button shapes are available: `circle`, `round` and `square`
     * @defaultValue square
     */
    shape?: 'circle' | 'round' | 'square';
};
export type AnchorButtonProps = {
    href: string;
    target?: string;
    anchorProps?: HTMLProps<HTMLAnchorElement>;
} & BaseButtonProps & Omit<AnchorHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;
export type FinalButtonProps = {
    /**
     * @zh 按钮原生的 html type 类型
     * @en html button type
     * @defaultValue button
     */
    htmlType?: 'button' | 'submit' | 'reset';
} & BaseButtonProps & Omit<ButtonHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;
/**
 * @title Button
 */
export type ButtonProps = Partial<FinalButtonProps & AnchorButtonProps>;
