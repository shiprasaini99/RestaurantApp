import { CircleUserRound, Menu } from 'lucide-react'
import { SheetContent, SheetDescription, SheetTitle, SheetTrigger , Sheet} from './ui/sheet';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';
import MobileNavLinks from './MobileNavLinks';
import { useAuth0 } from '@auth0/auth0-react';

export default function MobileNav() {
  const {isAuthenticated, loginWithRedirect,user} = useAuth0();
    return (
        <div>
             <Sheet>
             <SheetTrigger asChild>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className='space-y-3'>
          <SheetTitle>
            {isAuthenticated ? (<span className='flex items-center font-bold gap-2'>
              <CircleUserRound className='text-orange-500'/>
              {user?.email}
              </span>) : (
            <span>Welcome to Veg Delights</span>)}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (<MobileNavLinks/>) : (
              <Button onClick={() => loginWithRedirect()} className="flex-1 font-bold bg-orange-500">Log In</Button>)}
            
          </SheetDescription>
        </SheetContent>
      </Sheet>
        </div>
    );
}
