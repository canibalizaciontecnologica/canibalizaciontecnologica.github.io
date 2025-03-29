import React from 'react';
import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import NotFound from '../components/common/NotFound';
import BaseLayout from './BaseLayout';
import { ComponentMap } from '../components/common/ComponentMap';

function LeftLateralBannerLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className="flex w-full h-[34vh] overflow-hidden md:w-2/5 md:min-h-screen md:h-auto"
          style={{
            backgroundImage: `url(${`${DEFAULT_URL}${route?.img}`})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </div>
        <div className="z-10 w-full max-w-6xl px-5 py-10 mx-auto my-auto md:w-3/5">
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
    );
};

export default LeftLateralBannerLayout;