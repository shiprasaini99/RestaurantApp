import { Menu } from 'lucide-react'
import { SheetContent, SheetDescription, SheetTitle, SheetTrigger , Sheet} from './ui/sheet';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';

export default function MobileNav() {
    return (
        <div>
             <Sheet>
             <SheetTrigger asChild>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className='space-y-3'>
          <SheetTitle>
            <span>Welcome to Veg Delights</span>
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
          </SheetDescription>
        </SheetContent>
      </Sheet>
        </div>
    );
}
