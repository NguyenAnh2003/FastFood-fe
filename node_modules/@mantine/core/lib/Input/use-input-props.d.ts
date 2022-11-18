import { DefaultProps } from '@mantine/styles';
import { InputWrapperBaseProps } from './InputWrapper/InputWrapper';
import { InputSharedProps } from './Input';
interface BaseProps extends InputWrapperBaseProps, InputSharedProps, DefaultProps {
    __staticSelector?: string;
    id?: string;
}
interface UseInputPropsReturnType extends Record<string, any> {
    wrapperProps: Record<string, any>;
    inputProps: Record<string, any>;
}
export declare function useInputProps<T extends BaseProps, U extends Partial<T>>(component: string, defaultProps: U, props: T): UseInputPropsReturnType;
export {};
//# sourceMappingURL=use-input-props.d.ts.map