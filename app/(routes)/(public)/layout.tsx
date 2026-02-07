import { PublicFooter } from './_components/public-footer';
import { PublicHeader } from './_components/public-header';

const PublicLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <PublicHeader />
      <div className='flex-1'>{children}</div>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
