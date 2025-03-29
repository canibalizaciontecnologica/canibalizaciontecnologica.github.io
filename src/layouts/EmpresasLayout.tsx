import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function EmpresasLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex justify-center items-center bg-${route?.bgColor} text-${route?.textColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className='flex flex-col w-fit h-fit'>
          <h1 className={`text-4xl font-semibold uppercase mb-8 px-5`}>{route?.title}</h1>
          <div className={`mx-auto max-w-screen overflow-x-auto`}>
            <div className={`max-w-6xl p-5 md:p-10 min-w-xl`}>
              <div className='flex'>
                <div className='mr-8'>
                  <h2 className='h-20 text-white uppercase'>Nombre</h2>
                  {route?.content?.body && route?.content?.body?.split(',').map((column, index) => (<div key={`emp-${index}`} className='border-b border-white'>{column}</div>))}
                </div>
                <div className=''>
                  <h2 className='h-20 pr-8 text-white uppercase'>Teléfono</h2>
                  {route?.content?.body && route?.content?.body2?.split(',').map((column, index) => (<div key={`emp2-${index}`} className='border-b border-white'>{column}</div>))}
                </div>
              </div>
            </div>
          </div>
          <span className='px-5 text-sm md:hidden'>Deslice hacia la derecha para ver más...</span>
        </div>
      </div>
    );
};

export default EmpresasLayout;