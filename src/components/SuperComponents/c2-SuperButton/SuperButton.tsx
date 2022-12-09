import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button
        + (disabled
            ? ' ' + s.disabled
            : xType === 'default'
                ? ' ' + s.default :
                xType === 'red'
                    ? ' ' + s.red
                    : xType === 'secondary'
                        ? ' ' + s.secondary
                        : ' ')
        + (className ? ' ' + className : '')


    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
