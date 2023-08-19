/// <reference types="react" />
import { ConfigProviderProps } from './interface';
export declare const ConfigContext: import("react").Context<ConfigProviderProps>;
declare function ConfigProvider(baseProps: ConfigProviderProps): JSX.Element;
declare namespace ConfigProvider {
    var ConfigContext: import("react").Context<ConfigProviderProps>;
    var displayName: string;
}
export default ConfigProvider;
export declare const ConfigConsumer: import("react").Consumer<ConfigProviderProps>;
export { ConfigProviderProps };
