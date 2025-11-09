                            <>
                            <Button
                                block
                                disabled={false}
                                type="button"
                                onClick={() => {
                                    toast.push(
                                        <Notification title="Erfolg!" type="success" duration={0}>
                                            Das hat super funktioniert!
                                        </Notification>,
                                    )
                                }}
                            >
                                Success Toast
                            </Button>
                            <Button
                                block
                                disabled={false}
                                type="button"
                                onClick={() => {
                                    toast.push(
                                        <Notification title="Uhhh, aufpassen!" type="warning" duration={0}>
                                            Ernsthaft? Lass diese Spielchen.
                                        </Notification>,
                                    )
                                }}
                            >
                                Warning Toast
                            </Button>
                            <Button
                                block
                                disabled={false}
                                type="button"
                                onClick={() => {
                                    toast.push(
                                        <Notification title="Fehler!" type="danger" duration={0}>
                                            Hier ist etwas schiefgelaufen!
                                        </Notification>,
                                    )
                                }}
                            >
                                Danger Toast
                            </Button>
                            <Button
                                block
                                disabled={false}
                                type="button"
                                onClick={() => {
                                    toast.push(
                                        <Notification title="Information" type="info" duration={0}>
                                            Hier ist eine wichtige Information für dich.
                                        </Notification>,
                                    )
                                }}
                            >
                                Info Toast
                            </Button>
                            <Button
                                block
                                disabled={false}
                                type="button"
                                onClick={() => {
                                    toast.push(
                                        <Notification title="Information" customIcon={<HiOutlineGift className="text-2xl text-indigo-600" />} duration={0}>
                                            Dein Custom Icon.
                                        </Notification>,
                                    )
                                }}
                            >
                                Custom Icon Toast
                            </Button>
                            <Button
                                block
                                disabled={false}
                                type="button"
                                onClick={() => {
                                    toast.push(
                                        <Notification title="Information" customIcon={<Avatar shape="circle" src="/img/avatars/cyko-emerson.png" />} duration={0}>
                                            Mit Avatar als Icon.
                                        </Notification>,
                                    )
                                }}
                            >
                                Avatar Icon Toast
                            </Button>
                            </>