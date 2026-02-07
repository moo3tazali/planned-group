import { Button } from '@/components/ui/button';
import { Logo } from '@/icons/logo';

export default function Page() {
  return (
    <div className=''>
      <h1 className='text-4xl font-extrabold'>Planned Group</h1>
      <p className='text-lg'>Planned Group is a company that plans groups.</p>
      <Button>Click me</Button>
      <Logo className='size-20' />
    </div>
  );
}
