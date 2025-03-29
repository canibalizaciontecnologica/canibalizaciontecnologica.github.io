import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

export default function BannerLayout({route}: BaseLayoutProps) {
  return (
    <div id={route?.name} className='relative w-full' style={{ aspectRatio: '16/9' }}>
        <BaseLayout route={route} />
        <img
        src={`${DEFAULT_URL}${route?.img}`}
        alt={route?.descriptiveSummary}
        className="object-cover w-full h-full"
        loading='lazy'
        />
    </div>
  );
};
