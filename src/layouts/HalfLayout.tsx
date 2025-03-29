import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function HalfLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} md:min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className='items-center justify-center hidden w-1/2 h-screen px-5 md:flex'>
          <img src={`${DEFAULT_URL}${route?.img}`} alt={route?.descriptiveSummary} className='w-full max-w-xl' />
        </div>
        <div className={`flex items-center justify-center w-full md:w-1/2 py-36 px-5 bg-${route?.bgColor2}`}>
          <h1 className={`text-6xl/tight text-${route?.textColor} uppercase`}>{route?.title}</h1>
        </div>
      </div>
    );
};

export default HalfLayout;