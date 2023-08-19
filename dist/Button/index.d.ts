import React from 'react';
import type { ButtonProps } from './interface';
import { ConfigContext } from '../ConfigProvider';
declare const ButtonComponent: React.ForwardRefExoticComponent<Partial<{
    htmlType?: "button" | "submit" | "reset";
} & import("./interface").BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick" | "className"> & {
    href: string;
    target?: string;
    anchorProps?: React.HTMLProps<HTMLAnchorElement>;
} & Omit<React.AnchorHTMLAttributes<any>, "type" | "onClick" | "className">> & React.RefAttributes<unknown>> & {
    __BYTE_BUTTON: boolean;
};
export default ButtonComponent;
export { ButtonProps };
export { ConfigContext };
