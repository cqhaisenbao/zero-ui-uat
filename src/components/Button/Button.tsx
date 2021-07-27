import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
    loading?: boolean;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
    const {btnType, className, disabled, size, children, loading, href, ...restProps} = props;

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'loading': loading,
        'disabled': (btnType === 'link') && disabled
    });
    if (btnType === 'link' && href) {
        return (
            <a className={classes} href={href} {...restProps}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={classes} disabled={disabled} {...restProps}>
                {loading && <span className="loading"/>}
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    disabled: false,
    children: '按钮默认文字',
    btnType: 'default'
};

export default Button;
