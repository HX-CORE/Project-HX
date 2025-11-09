'use client'

import { useState, useRef } from 'react'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { Form, FormItem } from '@/components/ui/Form'
import classNames from '@/utils/classNames'
import sleep from '@/utils/sleep'
import isLastChild from '@/utils/isLastChild'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'

type PasswordSchema = {
    currentPassword: string
    newPassword: string
    confirmNewPassword: string
}

const authenticatorList = [
    {
        label: 'Verifizieren mit E-Mail',
        value: 'emailVerification',
        img: '/img/others/email.png',
        desc: 'Einmalige Codes, die per E-Mail für die Bestätigung von Logins versendet werden.',
    },
]

const validationSchema = z
    .object({
        currentPassword: z
            .string()
            .min(1, { message: 'Bitte geben Sie Ihr aktuelles Passwort ein!' }),
        newPassword: z
            .string()
            .min(1, { message: 'Bitte geben Sie Ihr neues Passwort ein!' }),
        confirmNewPassword: z
            .string()
            .min(1, { message: 'Bitte bestätigen Sie Ihr neues Passwort!' }),
    })
    .refine((data) => data.confirmNewPassword === data.newPassword, {
        message: 'Die Passwörter stimmen nicht überein!',
        path: ['confirmNewPassword'],
    })

const SettingsSecurity = () => {
    const [selected2FaType, setSelected2FaType] = useState(
        'googleAuthenticator',
    )
    const [confirmationOpen, setConfirmationOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const {
        getValues,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<PasswordSchema>({
        resolver: zodResolver(validationSchema),
    })

    const handlePostSubmit = async () => {
        setIsSubmitting(true)
        await sleep(1000)
        console.log('getValues', getValues())
        setConfirmationOpen(false)
        setIsSubmitting(false)
    }

    const onSubmit = async () => {
        setConfirmationOpen(true)
    }

    return (
        <div>
            <div className="mb-8">
                <h4>Passwort</h4>
                <p>
                    Merken Sie sich bitte, Ihr Passwort ist der digitale Schlüssel zu Ihrem Konto.
                    Bewahren Sie es sicher!
                </p>
            </div>
            <Form
                ref={formRef}
                className="mb-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormItem
                    label="Aktuelles Passwort"
                    invalid={Boolean(errors.currentPassword)}
                    errorMessage={errors.currentPassword?.message}
                >
                    <Controller
                        name="currentPassword"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="password"
                                autoComplete="off"
                                placeholder="•••••••••"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Neues Passwort"
                    invalid={Boolean(errors.newPassword)}
                    errorMessage={errors.newPassword?.message}
                >
                    <Controller
                        name="newPassword"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="password"
                                autoComplete="off"
                                placeholder="•••••••••"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Bestätigung des neuen Passworts"
                    invalid={Boolean(errors.confirmNewPassword)}
                    errorMessage={errors.confirmNewPassword?.message}
                >
                    <Controller
                        name="confirmNewPassword"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="password"
                                autoComplete="off"
                                placeholder="•••••••••"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <div className="flex justify-end">
                    <Button variant="solid" type="submit">
                        Erneuern
                    </Button>
                </div>
            </Form>
            <ConfirmDialog
                isOpen={confirmationOpen}
                type="warning"
                title="Passwort aktualisieren"
                confirmButtonProps={{
                    loading: isSubmitting,
                    onClick: handlePostSubmit,
                }}
                onClose={() => setConfirmationOpen(false)}
                onRequestClose={() => setConfirmationOpen(false)}
                onCancel={() => setConfirmationOpen(false)}
            >
                <p>Sicher, dass du dein Passwort ändern möchtest?</p>
            </ConfirmDialog>
            <div className="mb-8">
                <h4>Zwei-Schritt-Verifizierung</h4>
                <p>
                    Ihr Konto enthält wertvolle Informationen, die für Hacker
                    von großem Wert sind. Aktivieren Sie die Zwei-Schritt-Verifizierung,
                    um Ihr Konto sicherer zu machen!
                </p>
                <div className="mt-8">
                    {authenticatorList.map((authOption, index) => (
                        <div
                            key={authOption.value}
                            className={classNames(
                                'py-6 border-gray-200 dark:border-gray-600',
                                !isLastChild(authenticatorList, index) &&
                                    'border-b',
                            )}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        size={35}
                                        className="bg-transparent"
                                        src={authOption.img}
                                    />
                                    <div>
                                        <h6>{authOption.label}</h6>
                                        <span>{authOption.desc}</span>
                                    </div>
                                </div>
                                <div>
                                    {selected2FaType === authOption.value ? (
                                        <Button
                                            size="sm"
                                            customColorClass={() =>
                                                'border-success ring-1 ring-success text-success hover:border-success hover:ring-success hover:text-success bg-transparent'
                                            }
                                            onClick={() =>
                                                setSelected2FaType('')
                                            }
                                        >
                                            Aktiviert
                                        </Button>
                                    ) : (
                                        <Button
                                            size="sm"
                                            onClick={() =>
                                                setSelected2FaType(
                                                    authOption.value,
                                                )
                                            }
                                        >
                                            Aktivieren
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SettingsSecurity

