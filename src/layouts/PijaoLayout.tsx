import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function PijaoLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} text-${route?.textColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className={`flex justify-center items-end md:hidden w-full bg-${route?.bgColor2}`}>
            <div className='px-5 pt-28 h-fit md:hidden'>
              <h1 className='text-4xl font-bold text-left uppercase' style={{ whiteSpace: 'pre-line' }}>{route?.content?.title}</h1>
            </div>
        </div>
        <div className={`absolute top-0 bottom-0 left-0 z-0 invisible md:visible right-2/5 bg-${route?.bgColor2}`}>
        </div>
        <div className='z-10 flex items-center justify-center w-full px-5 py-10'>
          <div className='relative flex flex-col py-10 mx-auto max-w-7xl md:py-0'>
            <div className={`text-sm flex flex-col sm:flex-row w-fit mx-auto`}>
              <div className='flex justify-center sm:justify-end w-[80vw] sm:w-3/5'>
                <img src={`${DEFAULT_URL}${route?.img}`} className='object-contain h-56' alt={route?.descriptiveSummary} />
              </div>
              <div className={`w-[80vw] sm:w-2/5 px-4`}>
                <div className={`bg-${route?.bgColor}/50 rounded-lg p-4 h-fit`}>
                  <h2 className={`text-${route?.content?.color}`}>{route?.content?.title2}</h2>
                  <p className={`text-${route?.content?.color2} font-light`}>{route?.content?.body}</p>
                </div>
              </div>
            </div>
            <div className='hidden md:flex h-fit'>
              <h1 className='text-4xl font-bold text-left uppercase' style={{ whiteSpace: 'pre-line' }}>{route?.content?.title}</h1>
            </div>
            <div className={`text-sm flex flex-col sm:flex-row w-fit mx-auto mt-10 md:mt-0`}>
              <div className='flex justify-center sm:justify-end w-[80vw] sm:w-3/5'>
                <img src={`${DEFAULT_URL}${route?.img2}`} className='object-contain h-56' alt={route?.descriptiveSummary} />
              </div>
              <div className='w-[80vw] sm:w-2/5 px-4'>
                <div className={`bg-${route?.bgColor}/50 rounded-lg p-4 h-fit`}>
                  <h2 className={`text-${route?.content?.color}`}>{route?.content?.title3}</h2>
                  <p className={`text-${route?.content?.color2} font-light`}>{route?.content?.body2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PijaoLayout;