'use client'
import {cn} from '@/lib/utils'

function IconLogo({className, ...props}: React.ComponentProps<'img'>) {
    return (
        <div>
            <img src="/images/logo-no-background.png" alt="FindtheBest" className={cn('h-4 w-4', className)}/>
        </div>
    );
}

export {IconLogo}
