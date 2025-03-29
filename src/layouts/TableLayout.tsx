import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function TableLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} text-${route?.textColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className={`flex w-full h-[34vh] overflow-hidden md:w-3/5 md:h-[100vh] bg-${route?.bgColor2}`}>
          <div className='mx-auto my-auto'>
            <h1 className='text-4xl font-bold text-left uppercase' style={{ whiteSpace: 'pre-line' }}>{route?.content?.title}</h1>
          </div>
        </div>
        <div className="z-10 w-full max-w-6xl mx-auto my-auto md:w-2/5">
            <div className={`text-sm flex md:-ml-30`}>
              <img src={`${DEFAULT_URL}${route?.img}`} className='object-contain h-56' alt={route?.descriptiveSummary} />
              <div className='px-4'>
                <h2 className={`text-${route?.content?.color}`}>{route?.content?.title2}</h2>
                <p className={`text-${route?.content?.color2} font-light`}>{route?.content?.body}</p>
              </div>
            </div>
            <div className={`text-sm flex md:-ml-30 mt-16`}>
              <img src={`${DEFAULT_URL}${route?.img}`} className='object-contain h-56' alt={route?.descriptiveSummary} />
              <div className='px-4'>
                <h2 className={`text-${route?.content?.color}`}>{route?.content?.title3}</h2>
                <p className={`text-${route?.content?.color2} font-light`}>{route?.content?.body2}</p>
              </div>
            </div>
        </div>
      </div>
    );
};

export default TableLayout;