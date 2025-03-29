import React from 'react';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import NotFound from '../components/common/NotFound';
import BaseLayout from './BaseLayout';
import { ComponentMap } from '../components/common/ComponentMap';
import { DEFAULT_URL } from '../Constant';

function LeftLateralImageLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex justify-center items-center bg-${route?.bgColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className='flex flex-wrap px-5 py-10 max-w-7xl'>
          <div className="flex w-full h-[34vh] overflow-hidden md:w-3/5 md:h-[100vh]">
            <img src={`${DEFAULT_URL}${route?.img}`} alt={route?.descriptiveSummary} className='object-contain w-full max-w-md mx-auto' />
          </div>
          <div className="z-10 w-full max-w-6xl mx-auto my-auto mt-10 md:w-2/5 md:mt-0">
              <div className={`text-sm text-left text-${route?.textColor}`}>
                  <div className={`rounded-4xl bg-${route?.bgColor}/50`}>
                      <h2 className='text-4xl font-bold uppercase'>{route?.title}</h2>
                      <p className="mt-5">{route?.subtitle}</p>
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

export default LeftLateralImageLayout;