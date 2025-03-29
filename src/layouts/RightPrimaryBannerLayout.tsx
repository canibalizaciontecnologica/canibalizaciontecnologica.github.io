import React from 'react';
import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import NotFound from '../components/common/NotFound';
import BaseLayout from './BaseLayout';
import { ComponentMap } from '../components/common/ComponentMap';

function RightPrimaryBannerLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className="z-10 w-full max-w-6xl mx-auto my-auto md:w-2/5">
            <div className={`p-10 text-sm text-left text-${route?.textColor}`}>
                <div className={`rounded-4xl bg-${route?.bgColor}/50 text-center`}>
                    {route?.img2 && <img src={`${DEFAULT_URL}${route?.img2}`} alt={route?.descriptiveSummary} className='w-2/3 max-w-md mx-auto mb-8' />}
                    <h2 className='text-4xl font-bold uppercase'>{route?.content?.title}</h2>
                    <p className="mt-5">{route?.subtitle}</p>
                    <div className='max-w-md mx-auto text-left'>
                      {route?.content?.title2 && <p className={`mt-5 text-${route?.content?.color}`}>{route?.content?.title2}</p>}
                      {route?.content?.component && React.cloneElement(
                          ComponentMap[route?.content?.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
                          { route: route, }
                          )}
                      {route?.content2?.title2 && <p className={`mt-5 text-${route?.content2?.color}`}>{route?.content2?.title2}</p>}
                      {route?.content2?.component && React.cloneElement(
                          ComponentMap[route?.content2?.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
                          { route: route, content: route?.content2 }
                          )}
                      {route?.content3?.title2 && <p className={`mt-5 text-${route?.content3?.color}`}>{route?.content3?.title2}</p>}
                      {route?.content3?.component && React.cloneElement(
                          ComponentMap[route?.content3?.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
                          { route: route, content: route?.content3 }
                          )}
                      {route?.content4?.title2 && <p className={`mt-5 text-${route?.content4?.color}`}>{route?.content4?.title2}</p>}
                      {route?.content4?.component && React.cloneElement(
                          ComponentMap[route?.content4?.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
                          { route: route, content: route?.content4 }
                          )}
                    </div>
                </div>
            </div>
        </div>
        <div className="flex w-full overflow-hidden min-h-[80vw] md:w-3/5 md:min-h-screen md:h-auto"
          style={{
            backgroundImage: `url(${`${DEFAULT_URL}${route?.img}`})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </div>
      </div>
    );
};

export default RightPrimaryBannerLayout;