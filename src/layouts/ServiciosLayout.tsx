import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function ServiciosLayout({ route }: BaseLayoutProps) {
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
              {route?.content?.title && (<table className="w-full font-light text-white">
                <thead>
                    <tr className={`text-left border-b border-yellow font-semibold`}>
                        <th className="p-3 text-white">MUNICIPIO</th>
                        <th className="p-3 text-yellow">NOMBRE</th>
                        <th className="p-3 text-yellow">CONTACTO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="p-3 font-semibold text-yellow">{route?.content?.title}</td>
                        <td className="p-3">{route?.content?.body?.split('*').map((row, index) => (<div key={index} className={`uppercase ${index < (route?.content?.body?.split('*').length || 1) - 1 ? 'border-b border-white' : ''}`}>{row}</div>))}</td>
                        <td className="p-3">{route?.content?.body2?.split('*').map((row, index) => (<div key={index} className={`uppercase ${index < (route?.content?.body2?.split('*').length || 1) - 1 ? 'border-b border-white' : ''}`}>{row}</div>))}</td>
                    </tr>
                    {route?.content2?.title && (
                          <tr className="border-t border-yellow">
                              <td className="p-3 font-semibold text-yellow">{route?.content2?.title}</td>
                              <td className="p-3">{route?.content2?.body?.split('*').map((row, index) => (<div key={index} className={`uppercase ${index < (route?.content2?.body?.split('*').length || 1) - 1 ? 'border-b border-white' : ''}`}>{row}</div>))}</td>
                              <td className="p-3">{route?.content2?.body2?.split('*').map((row, index) => (<div key={index} className={`uppercase ${index < (route?.content2?.body2?.split('*').length || 1) - 1 ? 'border-b border-white' : ''}`}>{row}</div>))}</td>
                          </tr>)}
                    {route?.content3?.title && (<tr className="border-t border-yellow">
                              <td className="p-3 font-semibold text-yellow">{route?.content3?.title}</td>
                              <td className="p-3">{route?.content3?.body?.split('*').map((row, index) => (<div key={index} className={`uppercase ${index < (route?.content3?.body?.split('*').length || 1) - 1 ? 'border-b border-white' : ''}`}>{row}</div>))}</td>
                              <td className="p-3">{route?.content3?.body2?.split('*').map((row, index) => (<div key={index} className={`uppercase ${index < (route?.content3?.body2?.split('*').length || 1) - 1 ? 'border-b border-white' : ''}`}>{row}</div>))}</td>
                          </tr>)}
                </tbody>
              </table>)}
            </div>
          </div>
          <span className='px-5 text-sm md:hidden'>Deslice hacia la derecha para ver más...</span>
        </div>
      </div>
    );
};

export default ServiciosLayout;