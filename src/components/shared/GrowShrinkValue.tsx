import classNames from '@/utils/classNames'
import { HiArrowUp, HiArrowDown } from 'react-icons/hi'
import type { ReactNode, Ref } from 'react'

interface GrowShrinkValueProps {
    /** The numeric value to display */
    value?: number
    /** Whether to show the icon indicator */
    showIcon?: boolean
    /** Content to display before the value */
    prefix?: ReactNode | string
    /** Content to display after the value */
    suffix?: ReactNode | string
    /** Custom icon for positive values */
    positiveIcon?: ReactNode | string
    /** Custom icon for negative values */
    negativeIcon?: ReactNode | string
    /** Additional CSS classes for positive values */
    positiveClass?: string
    /** Additional CSS classes for negative values */
    negativeClass?: string
    /** Additional CSS classes for the component */
    className?: string
    /** Ref for the component */
    ref?: Ref<HTMLSpanElement>
}

const GrowShrinkValue = (props: GrowShrinkValueProps) => {
    const {
        value = 0,
        className,
        prefix,
        suffix,
        positiveIcon,
        negativeIcon,
        showIcon = true,
        positiveClass,
        negativeClass,
        ref,
    } = props

    const renderIcon = (): ReactNode => {
        if (value === 0 || !showIcon) return null

        if (value > 0) {
            return typeof positiveIcon !== 'undefined' ? positiveIcon : <HiArrowUp />
        }

        if (typeof negativeIcon !== 'undefined') {
            return negativeIcon !== '' ? negativeIcon : null
        }

        return <HiArrowDown />
    }

    const icon = renderIcon()

    return (
        <span
            ref={ref}
            className={classNames(
                'flex items-center',
                value > 0
                    ? classNames('text-success', positiveClass)
                    : classNames('text-error', negativeClass),
                className,
            )}
        >
            {icon && <span>{icon}</span>}
            <span>
                {prefix}
                {value}
                {suffix}
            </span>
        </span>
    )
}

export default GrowShrinkValue
