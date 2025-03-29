import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function FullCenterImageLayout({route}: BaseLayoutProps) {
  const bgColor = route?.bgColor ? `bg-${route.bgColor}` : 'bg-yellow';
  return (
    <div id={route?.name} className={`flex items-center justify-center w-full min-h-screen py-4 px-0 sm:px-8 md:px-16 lg:px-24 xl:px-36 relative ${bgColor}`}>
      <BaseLayout route={route} />
      <img
        src={`${DEFAULT_URL}${route?.img}`}
        alt={route?.descriptiveSummary}
        className="w-full max-h-[80vh] max-w-7xl object-contain z-10"
        loading='lazy'
      />
    </div>
  );
};

export default FullCenterImageLayout;