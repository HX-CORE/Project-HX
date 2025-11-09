/**
 * Example usage of the authority utilities
 */

// Example 1: Using useUserAuthority (current approach in ControlSchedule)
import { useUserAuthority } from '@/utils/authority'
import AuthorityCheck from '@/components/shared/AuthorityCheck'

const ExampleComponent1 = () => {
    const userAuthority = useUserAuthority()
    
    return (
        <AuthorityCheck authority={['admin', 'leader']} userAuthority={userAuthority}>
            <button>Protected Action</button>
        </AuthorityCheck>
    )
}

// Example 2: Using useAuthorityCheck for inline permission checks
import { useAuthorityCheck } from '@/utils/authority'

const ExampleComponent2 = () => {
    const { userAuthority, hasPermission } = useAuthorityCheck(['admin', 'leader'])
    
    return (
        <div>
            {hasPermission && <button>Protected Action</button>}
            <span>User roles: {userAuthority.join(', ')}</span>
        </div>
    )
}

// Example 3: Using normalizeAuthority directly for custom logic
import { normalizeAuthority } from '@/utils/authority'

const ExampleComponent3 = ({ rawAuthority }: { rawAuthority: any }) => {
    const normalizedAuthority = normalizeAuthority(rawAuthority)
    
    return (
        <div>
            Normalized authority: {normalizedAuthority.join(', ')}
        </div>
    )
}

// Example 4: 