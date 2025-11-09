'use client'

import Card from '@/components/ui/Card'
import GrowShrinkValue from '@/components/shared/GrowShrinkValue'
import classNames from '@/utils/classNames'
import { NumericFormat } from 'react-number-format'
import { GiHandcuffs, GiMac10, GiChemicalTank, GiPerson } from 'react-icons/gi'
import { MetricsData, Period } from '../types'

type WidgetProps = {
    title: string
    growShrink: number
    value: string | number | React.ReactNode
    compareFrom: string
    icon: React.ReactNode
    iconClass: string
}

type MetricsProps = {
    dataID: number[]
    data: MetricsData
    selectedPeriod: Period
}

const vsPeriod: Record<Period, string> = {
    thisDay: 'vs. letzter Tag',
    thisMonth: 'vs. letzter Monat',
    thisWeek: 'vs. letzte Woche',
    thisYear: 'vs. letztes Jahr',
}

const Widget = ({
    title,
    growShrink,
    value,
    compareFrom,
    icon,
    iconClass,
}: WidgetProps) => {
    return (
        <Card className="flex-1">
            <div className="flex justify-between gap-2 relative">
                <div>
                    <div className="mb-6 text-base">{title}</div>
                    <h3 className="mb-1">{value}</h3>
                    <div className="inline-flex items-center flex-wrap gap-1">
                        <GrowShrinkValue
                            className="font-bold"
                            value={growShrink}
                            suffix="%"
                            positiveIcon="+"
                            negativeIcon=""
                        />
                        <span>{compareFrom}</span>
                    </div>
                </div>
                <div
                    className={classNames(
                        'flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-primary border-2 border-primary avatar-round text-2xl',
                        iconClass,
                    )}
                >
                    {icon}
                </div>
            </div>
        </Card>
    )
}

const Metrics = ({ dataID, data, selectedPeriod }: MetricsProps) => {

    const getMetricConfig = (id: number) => {
        const configs = {
            1: {
                key: 'arrests' as keyof MetricsData,
                title: 'Verhaftungen',
                icon: <GiHandcuffs />,
            },
            2: {
                key: 'seizedWeapons' as keyof MetricsData,
                title: 'Beschlagnahmte Waffen',
                icon: <GiMac10 />,
            },
            3: {
                key: 'seizedDrugs' as keyof MetricsData,
                title: 'Sichergestellte Drogen',
                icon: <GiChemicalTank />,
            },
            4: {
                key: 'freedHostages' as keyof MetricsData,
                title: 'Befreite Geiseln',
                icon: <GiPerson />,
            },
        }
        return configs[id as keyof typeof configs]
    }


    
    const containerClass = "flex flex-col 2xl:flex-col xl:flex-row gap-4"
    
    return (
        <div className={containerClass}>
            {dataID.map((id) => {
                const config = getMetricConfig(id)
                if (!config) return null
                
                const metricData = data[config.key]
                
                return (
                    <Widget
                        key={id}
                        title={config.title}
                        value={
                            <NumericFormat
                                displayType="text"
                                value={metricData.value}
                                thousandSeparator
                            />
                        }
                        growShrink={metricData.growShrink}
                        compareFrom={vsPeriod[selectedPeriod]}
                        icon={config.icon}
                        iconClass="dark:bg-gray-900"
                    />
                )
            })}
        </div>
    )
}

export default Metrics