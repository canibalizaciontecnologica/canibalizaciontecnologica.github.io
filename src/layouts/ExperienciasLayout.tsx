import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function ExperienciasLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex justify-center items-center bg-${route?.bgColor} text-${route?.textColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className='flex flex-col py-10 w-fit h-fit'>
          <h1 className={`text-4xl font-semibold uppercase mb-8 px-5`}>{route?.title}</h1>
          <div className={`mx-auto max-w-screen overflow-x-auto z-10`}>
            <div className={`max-w-6xl p-5 md:p-10 min-w-4xl bg-${route?.bgColor}/50 rounded-lg`}>
              {route?.content?.title && route?.content?.title?.split('*').map((column, index) => (<table key={`exp-table2-${index}`} className="w-full font-light text-white">
                <thead>
                    <tr className={`text-left border-b border-yellow font-semibold`}>
                        <th className="p-3 ">MUNICIPIO</th>
                        <th className="p-3 ">TIPO DE EXPERIENCIA</th>
                        <th className="p-3 ">NOMBRE</th>
                        <th className="p-3 ">CONTACTO</th>
                        <th className="p-3 ">TARIFA EXPERIENCIAS TURÍSTICAS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="p-3 text-yellow">{column}</td>
                        {route?.content?.body?.split('**')[0].split('*').map((row, index2) => (<td key={`exp-table-col-${index2}`} className="p-3 border-b border-white">{row}</td>))}
                    </tr>
                    {route?.content?.body?.split('**').slice(1).map((_row, index2) => (<tr key={`exp-table-row-${index2}`} className="">
                        <td className="p-3"></td>
                        {route?.content?.body?.split('**').slice(1)[index2].split('*').map((row2, index3) => (<td key={`exp-table-col2-${index3}`} className={`p-3 border-white ${index2 < (route?.content?.body?.split('**').slice(1).length || 0) - 1 ? 'border-b' : ''}`}>{row2}</td>))}
                    </tr>))}
                    {route?.content2?.title && <tr className="border-t border-yellow">
                        <td className="p-3 text-yellow">{route?.content2?.title}</td>
                        {route?.content2?.body?.split('**')[0].split('*').map((row, index2) => (<td key={`exp-table2-col-${index2}`} className="p-3 border-b border-white">{row}</td>))}
                    </tr>}
                    {route?.content2?.title && route?.content2?.body?.split('**').slice(1).map((_row, index2) => (<tr key={`exp-table2-row-${index2}`} className="">
                        <td className="p-3"></td>
                        {route?.content2?.body?.split('**').slice(1)[index2].split('*').map((row2, index3) => (<td key={`exp-table2-col2-${index3}`} className={`p-3 border-white ${index2 < (route?.content2?.body?.split('**').slice(1).length || 0) - 1 ? 'border-b' : ''}`}>{row2}</td>))}
                    </tr>))}
                </tbody>
              </table>))}
            </div>
          </div>
          <span className='px-5 text-sm md:hidden'>Deslice hacia la derecha para ver más...</span>
        </div>
      </div>
    );
};

export default ExperienciasLayout;