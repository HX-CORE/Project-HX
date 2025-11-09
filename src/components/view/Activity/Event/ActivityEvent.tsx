'use client'

import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import classNames from 'classnames'
import ReactHtmlParser from 'html-react-parser'
import isLastChild from '@/utils/isLastChild'
import dayjs from 'dayjs'
import {
    CREATE_CASE,
    EDIT_CASE_DESCRIPTION,
    EDIT_CASE_ADD_FILE_ATTACHMENT,
    EDIT_CASE_ADD_TAGS,
    EDIT_CASE_STATUS,
} from '../constants'
import { caseStatus, taskLabelColors } from './ActivityEventConfig'
import type { CommonProps } from '@/@types/common'
import type { HTMLReactParserOptions } from 'html-react-parser'
import type { ActivityEventProps } from './types'

const UnixDateTime = ({ value }: { value: number | string }) => {
    return (
        <>
            {typeof value === 'string'
                ? value
                : dayjs.unix(value).format('hh:mm A')}
        </>
    )
}

const HighlightedText = ({ children, className }: CommonProps) => {
    return (
        <span className={classNames('font-bold heading-text', className)}>
            {children}
        </span>
    )
}

const ActivityEvent = ({ data, compact }: ActivityEventProps) => {
    const options: HTMLReactParserOptions = {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        replace: (node: any) => {
            if (node.type === 'tag' && node?.name === 'strong') {
                return (
                    <HighlightedText key={node?.children[0]?.data}>
                        {node?.children[0]?.data}
                    </HighlightedText>
                )
            }
            return node.data
        },
    }

    switch (data.type) {
        // ! -- AKTENSYSTEM -- ! \\
        case CREATE_CASE:
            return compact ? (
                <>
                    <div className="flex flex-col gap-y-0.5">
                        <HighlightedText>{data.userName}</HighlightedText>
                        <span className="text-xs font-semibold">
                            <UnixDateTime value={data.dateTime} />
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="mx-1">hat die Akte</span>
                        <HighlightedText>
                        <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                            {data.caseId}
                        </a>
                        </HighlightedText>
                        <span className="mx-1">mit dem Titel</span>
                        <HighlightedText>{data.title}</HighlightedText>
                        <span className="mx-1">angelegt</span>
                    </div>
                </>
            ) : (
                <p className="my-1">
                    <HighlightedText>{data.userName}</HighlightedText>
                    <span className="mx-1">hat die Akte</span>
                    <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                        {data.caseId}
                    </a>
                    <span className="mx-1">mit dem Titel</span>
                    <HighlightedText>{data.title}</HighlightedText>
                    <span className="mx-1">angelegt</span>
                    <span className="ml-1 rtl:mr-1 md:ml-3 md:rtl:mr-3 font-semibold">
                        <UnixDateTime value={data.dateTime} />
                    </span>
                </p>
            )
        case EDIT_CASE_DESCRIPTION:
            return compact ? (
                <>
                    <div className="flex flex-col gap-y-0.5">
                        <HighlightedText>{data.userName}</HighlightedText>
                        <span className="text-xs font-semibold">
                            <UnixDateTime value={data.dateTime} />
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="mx-1">hat die Akte</span>
                        <HighlightedText>
                        <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                            {data.caseId}
                        </a>
                        </HighlightedText>
                        <span className="mx-1">bearbeitet. Veränderung: {data.changes}</span>
                    </div>
                </>
            ) : (
                <p className="my-1">
                    <HighlightedText>{data.userName}</HighlightedText>
                    <span className="mx-1">hat die Akte</span>
                        <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                            {data.caseId}
                        </a>
                    <span className="mx-1">bearbeitet. Veränderung: {data.changes}</span>
                    <span className="ml-1 rtl:mr-1 md:ml-3 md:rtl:mr-3 font-semibold">
                        <UnixDateTime value={data.dateTime} />
                    </span>
                </p>
            )
        case EDIT_CASE_ADD_FILE_ATTACHMENT:
            return compact ? (
                <>
                    <div className="flex flex-col gap-y-0.5">
                        <HighlightedText>{data.userName}</HighlightedText>
                        <span className="text-xs font-semibold">
                            <UnixDateTime value={data.dateTime} />
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="mx-1">hat der Akte</span>
                        <HighlightedText>
                            <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                                {data.caseId}
                            </a>
                        </HighlightedText>
                        <span className="mx-1">{data.attachedFiles?.length === 1 ? 'eine Datei hinzugefügt:' : 'Dateien hinzugefügt:'}</span>
                        {data.attachedFiles?.map((file, index) => (
                            <span key={file}>
                                <HighlightedText>
                                    <a href={`Datenbank/Akten/${data.caseId}/Beweise/${file}`} className="hover:text-primary hover:underline">
                                        {file}
                                    </a>
                                </HighlightedText>
                                {index < data.attachedFiles!.length - 1 && ', '}
                            </span>
                        ))}
                    </div>
                </>
            ) : (
                <p className="my-1">
                    <HighlightedText>{data.userName}</HighlightedText>
                    <span className="mx-1">hat die Akte</span>
                        <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                            {data.caseId}
                        </a>
                    <span className="mx-1">{data.attachedFiles?.length === 1 ? 'eine Datei hinzugefügt:' : 'Dateien hinzugefügt:'}</span>
                        {data.attachedFiles?.map((file, index) => (
                            <span key={file}>
                                <HighlightedText>
                                    <a href={`Datenbank/Akten/${data.caseId}/Beweise/${file}`} className="hover:text-primary hover:underline">
                                        {file}
                                    </a>
                                </HighlightedText>
                                {index < data.attachedFiles!.length - 1 && ', '}
                            </span>
                        ))}
                    <span className="ml-1 rtl:mr-1 md:ml-3 md:rtl:mr-3 font-semibold">
                        <UnixDateTime value={data.dateTime} />
                    </span>
                </p>
            )
        case EDIT_CASE_ADD_TAGS:
            return compact ? (
                <>
                    <div className="flex flex-col gap-y-0.5">
                        <HighlightedText>{data.userName}</HighlightedText>
                        <span className="text-xs font-semibold">
                            <UnixDateTime value={data.dateTime} />
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="mx-1">hat der Akte</span>
                        <HighlightedText>
                            <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                                {data.caseId}
                            </a>
                        </HighlightedText>
                        <span className="mx-1">Tags hinzugefügt </span>
                            {data?.tags?.map((label, index) => (
                                <Tag
                                    key={label + index}
                                    prefix
                                    className="mx-1"
                                    prefixClass={`${taskLabelColors[label]}`}
                                >
                                    {label}
                                </Tag>
                            ))}
                    </div>
                </>
            ) : (
                <p className="my-1">
                    <HighlightedText>{data.userName}</HighlightedText>
                    <span className="mx-1">hat die Akte</span>
                    <HighlightedText>
                        <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                            {data.caseId}
                        </a>
                    </HighlightedText>
                    <span className="mx-1">Tags hinzugefügt </span>
                        {data?.tags?.map((label, index) => (
                            <Tag
                                key={label + index}
                                prefix
                                className="mx-1"
                                prefixClass={`${taskLabelColors[label]}`}
                            >
                                {label}
                            </Tag>
                        ))}
                    <span className="ml-1 rtl:mr-1 md:ml-3 md:rtl:mr-3 font-semibold">
                        <UnixDateTime value={data.dateTime} />
                    </span>
                </p>
            )
        case EDIT_CASE_STATUS:
            return compact ? (
                <>
                    <div className="flex flex-col gap-y-0.5">
                        <HighlightedText>{data.userName}</HighlightedText>
                        <span className="text-xs font-semibold">
                            <UnixDateTime value={data.dateTime} />
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="mx-1">die Akte</span>
                        <HighlightedText>
                            <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                                {data.caseId}
                            </a>
                        </HighlightedText>
                        <span className="mx-1">{data.status === 1 ? 'befindet sich nun ' : 'wurde als ' }</span>
                        <span className="inline-flex items-center gap-1">
                            <Badge
                                className={
                                    caseStatus[data.status || 0].bgClass
                                }
                            />
                            <HighlightedText className="ml-1 rtl:mr-1">
                                {caseStatus[data.status || 0].label}
                            </HighlightedText>
                        </span>
                        {(data.status === 0 || data.status === 2) && <span className="mx-1">markiert</span>}
                    </div>
                </>
            ) : (
                <p className="my-1">
                    <HighlightedText>{data.userName}</HighlightedText>
                        <span className="mx-1">die Akte</span>
                        <HighlightedText>
                            <a href={`Datenbank/Akten/${data.caseId}`} className="hover:text-primary hover:underline">
                                {data.caseId}
                            </a>
                        </HighlightedText>
                        <span className="mx-1">{data.status === 1 ? 'befindet sich nun ' : 'wurde als ' }</span>
                        <span className="inline-flex items-center gap-1">
                            <Badge
                                className={
                                    caseStatus[data.status || 0].bgClass
                                }
                            />
                            <HighlightedText className="ml-1 rtl:mr-1">
                                {caseStatus[data.status || 0].label}
                            </HighlightedText>
                        </span>
                    <span className="ml-1 rtl:mr-1 md:ml-3 md:rtl:mr-3 font-semibold">
                        <UnixDateTime value={data.dateTime} />
                    </span>
                </p>
            )
        default:
            return null
    }
}

export default ActivityEvent
