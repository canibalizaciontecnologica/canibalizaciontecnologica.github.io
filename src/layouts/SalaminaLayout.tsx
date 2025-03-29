import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function SalaminaLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} text-${route?.textColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className={`flex md:hidden justify-center items-end w-full md:w-3/5 md:min-h-screen bg-${route?.bgColor2}`}>
            <div className='px-5 pt-28 h-fit md:hidden'>
              <h1 className='text-4xl font-bold text-left uppercase' style={{ whiteSpace: 'pre-line' }}>{route?.content?.title}</h1>
            </div>
        </div>
        <div className={`absolute top-0 bottom-0 left-0 z-0 invisible md:visible right-2/5 bg-${route?.bgColor2}`}>
        </div>
        <div className='flex items-center justify-center w-full px-5 py-10'>
          <div className='relative flex flex-col max-w-7xl'>
            <div className={`text-sm flex flex-col sm:flex-row w-fit mx-auto`}>
              <div className='flex justify-center sm:justify-end w-[80vw] sm:w-3/5'>
                <img src={`${DEFAULT_URL}${route?.img2}`} className='object-contain w-56' alt={route?.descriptiveSummary} />
              </div>
              <div className={`w-[80vw] sm:w-2/5 px-4`}>
                <img src={`${DEFAULT_URL}${route?.img}`} className='object-contain h-56' alt={route?.descriptiveSummary} />
                <div className={`bg-${route?.bgColor}/50 rounded-lg p-4 h-fit`}>
                  <h2 className={`text-${route?.content?.color}`}>{route?.content?.title2}</h2>
                  <p className={`text-${route?.content?.color2} font-light`}>{route?.content?.body}</p>
                </div>
              </div>
            </div>
            <div className='hidden md:flex md:absolute md:top-1/2 md:left-5 md:transform md:-translate-y-full h-fit'>
              <h1 className={`text-4xl font-bold text-left uppercase rounded-lg bg-${route?.bgColor2}/50`} style={{ whiteSpace: 'pre-line' }}>{route?.content?.title}</h1>
            </div>
            <div className={`text-sm flex flex-col sm:flex-row w-fit mx-auto`}>
              <div className='flex justify-center sm:justify-end w-[80vw] sm:w-3/5'>
                <img src={`${DEFAULT_URL}${route?.img3}`} className='object-contain h-56' alt={route?.descriptiveSummary} />
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

export default SalaminaLayout;