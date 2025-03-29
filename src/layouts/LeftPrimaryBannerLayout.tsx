import React from 'react';
import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import NotFound from '../components/common/NotFound';
import BaseLayout from './BaseLayout';
import { ComponentMap } from '../components/common/ComponentMap';

function LeftPrimaryBannerLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className="flex w-full h-[80vw] overflow-hidden md:w-3/5 md:min-h-screen md:h-auto"
          style={{
            backgroundImage: `url(${`${DEFAULT_URL}${route?.img}`})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </div>
        <div className="z-10 w-full max-w-6xl mx-auto my-auto md:w-2/5">
            <div className={`p-10 text-sm text-left text-${route?.textColor}`}>
                <div className={`rounded-4xl bg-${route?.bgColor}/50 text-center`}>
                    {route?.img2 && <img src={`${DEFAULT_URL}${route?.img2}`} alt={route?.descriptiveSummary} className='w-2/3 max-w-md mx-auto' />}
                    <h2 className='my-8 text-4xl font-bold uppercase'>{route?.content?.title}</h2>
                    <p className="max-w-md mx-auto mt-5">{route?.subtitle}</p>
                    <div className='max-w-md mx-auto'>
                      {route?.content?.component && React.cloneElement(
                          ComponentMap[route?.content?.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
                          { route: route, }
                          )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default LeftPrimaryBannerLayout;