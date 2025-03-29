import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function GuiaTurismoLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex justify-center items-center bg-${route?.bgColor} text-${route?.textColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className='flex flex-col w-fit h-fit'>
          <h1 className={`text-4xl font-semibold uppercase mb-8 px-5`}>{route?.title}</h1>
          <div className={`mx-auto max-w-screen overflow-x-auto`}>
            <div className={`max-w-6xl p-5 md:p-10 min-w-4xl`}>
              <div className='flex'>
                <div className='mr-8'>
                  <h2 className='h-20 text-white uppercase'>Nombre</h2>
                  {route?.content?.title && route?.content?.title?.split(',').map((column, index) => (<div key={`gui-${index}`} className='border-b border-white'>{column}</div>))}
                </div>
                <div className='flex flex-1'>
                  <div className='flex-1'>
                    <h2 className='h-20 pr-8 text-white uppercase'>Whatsapp</h2>
                    {route?.content?.body && route?.content?.body?.split(',').map((column, index) => (<div key={`gui2-${index}`} className='border-b border-white'>{column}</div>))}
                  </div>
                  <div className='flex-1'>
                    <h2 className='h-20 pr-8 text-white uppercase'>NUMÉRO DE REGISTRO<br />NACIONAL DE TURISMO</h2>
                    {route?.content?.body2 && route?.content?.body2?.split(',').map((column, index) => (<div key={`gui3-${index}`} className='border-b border-white'>{column}</div>))}
                  </div>
                  <div className='flex-1'>
                    <h2 className='h-20 text-white uppercase'>TARJETA PROFESIONAL</h2>
                    {route?.content?.body3 && route?.content?.body3?.split(',').map((column, index) => (<div key={`gui4-${index}`} className='border-b border-white'>{column}</div>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className='px-5 text-sm md:hidden'>Deslice hacia la derecha para ver más...</span>
        </div>
      </div>
    );
};

export default GuiaTurismoLayout;