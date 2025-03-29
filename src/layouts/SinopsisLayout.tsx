import React from 'react';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import NotFound from '../components/common/NotFound';
import BaseLayout from './BaseLayout';
import { ComponentMap } from '../components/common/ComponentMap';
import { DEFAULT_URL } from '../Constant';

function SinopsisLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className={`flex flex-col justify-center w-full p-4 md:w-2/5 md:min-h-screen bg-${route?.bgColor2}`}>
          <img src={`${DEFAULT_URL}${route?.img}`} alt={route?.descriptiveSummary} className='object-contain w-full max-w-md mx-auto my-8' />
          <p style={{ whiteSpace: 'pre-line' }} className={`text-${route?.textColor2} font-light max-w-md mx-auto`} dangerouslySetInnerHTML={{ __html: route?.body ?? '' }} >
          </p>
        </div>
        <div className="z-10 w-full max-w-6xl mx-auto my-auto md:w-3/5">
            <div className={`p-10 text-sm text-left text-${route?.textColor}`}>
                <div className={`rounded-4xl bg-${route?.bgColor}/50`}>
                    <h2 className='text-4xl font-bold uppercase'>{route?.content?.title}</h2>
                    {route?.content?.body && <p className={`mt-5 text-${route?.content?.color} mb-8`} style={{ whiteSpace: 'pre-line'}}>{route?.content?.body}</p>}
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

export default SinopsisLayout;