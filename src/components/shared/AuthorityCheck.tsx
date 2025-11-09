import useAuthority from '@/utils/hooks/useAuthority'
import type { CommonProps } from '@/@types/common'

interface AuthorityCheckProps extends CommonProps {
    userAuthority: string[]
    authority: string[]
    noMatch?: React.ReactNode
}

const AuthorityCheck = (props: AuthorityCheckProps) => {
    const { userAuthority = [], authority = [], children, noMatch } = props

    const roleMatched = useAuthority(userAuthority, authority)

    return <>{roleMatched ? children : noMatch}</>
}

export default AuthorityCheck
