import LeftTopIconLayout from '../../layouts/LeftTopIconLayout';
import { DEFAULT_PATH, DEFAULT_URL } from '../../Constant';
import BaseLayout from '../../layouts/BaseLayout';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

export default function TablaContenidos({route}: BaseLayoutProps) {
  const handleClick = (section: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const onSubRoute = window.location.pathname !== DEFAULT_PATH;
    if (onSubRoute) {
      window.location.href = section ? DEFAULT_URL + "#" + section : DEFAULT_URL + "#tabla-de-contenido";
    } else {
      window.dispatchEvent(new CustomEvent('sectionChange', { detail: { section: section ?? "tabla-de-contenido" } }));
    }
  };

  return (
    <LeftTopIconLayout id='tabla-de-contenido' color='green'>
      <BaseLayout route={route} />
      <div className="flex flex-col w-full h-full px-5 py-10 text-sm text-left text-purple">
        <div className='flex flex-wrap justify-between w-full'>
            <div>
                <h2 className="text-4xl font-bold uppercase">TABLA DE CONTENIDO</h2>
            </div>
            <div>
                <img src={`${DEFAULT_URL}assets/logos/culturas/culturas-decorator-green.webp`} alt={route?.descriptiveSummary} />
            </div>
        </div>
        <div className="grid grid-cols-1 mt-10 gap-x-8 md:grid-cols-3">
            <div className="w-full">
                <a href="#agradecimientos" className="font-semibold uppercase" onClick={(e) => handleClick('agradecimientos', e)}>AGRADECIMIENTOS</a>
                <hr className="my-4 border-purple" />
                <a href="#prologo" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>PRÓLOGO</a>
                <hr className="my-4 border-purple" />
                <a href="#introduccion" className="font-semibold uppercase" onClick={(e) => handleClick('introduccion', e)}>INTRODUCCIÓN</a>
                <hr className="my-4 border-purple" />
                <a href="#playlist" className="font-semibold uppercase" onClick={(e) => handleClick('playlist', e)}>ESCUCHA LA PLAYLIST</a>
                <hr className="my-4 border-purple" />
            </div>
            <div className="w-full">
                <a href="#destinos-silenciosos-memoria-paramo" className="font-semibold uppercase" onClick={(e) => handleClick('destinos-silenciosos-memoria-paramo', e)}>1. DESTINOS SILENCIOSOS EN “MEMORIA” Y “EL PÁRAMO”</a>
                <hr className="my-4 border-purple" />
                <a href="#destinos-encanto" className="font-semibold uppercase" onClick={(e) => handleClick('destinos-encanto', e)}>2. DESTINOS ANIMADOS EN “ENCANTO”</a>
                <hr className="my-4 border-purple" />
                <a href="#destino-telenovelas" className="font-semibold uppercase" onClick={(e) => handleClick('destino-telenovelas', e)}>3. DESTINOS DE TELENOVEL A EN “CAFÉ CON AROMA DE MUJER 2021”, “L AS HERMANITAS CALLE” Y “DOÑA BELLA”</a>
                <hr className="my-4 border-purple" />
                <a href="#destino-campesino" className="font-semibold uppercase" onClick={(e) => handleClick('destino-campesino', e)}>4. DESTINOS CAMPESINOS EN “LA PASIÓN DE GABRIEL”</a>
                <hr className="my-4 border-purple" />
                <a href="#destino-anoranza" className="font-semibold uppercase" onClick={(e) => handleClick('destino-anoranza', e)}>5. DESTINOS DE AÑORANZA EN “CAFÉ CON AROMA DE MUJER 1994” Y “MILAGRO EN ROMA”</a>
                <hr className="my-4 border-purple" />
            </div>
            <div className="w-full">
                <a href="#anexo-mapas-intro" className="font-semibold uppercase" onClick={(e) => handleClick('anexo-mapas-intro', e)}>ANEXO DE MAPAS</a>
                <hr className="my-4 border-purple" />
                <a href="#directorio-servicios-turisticos" className="font-semibold uppercase" onClick={(e) => handleClick('directorio-servicios-turisticos', e)}>DIRECTORIO DE SERVICIOS TURÍSTICOS</a>
                <hr className="my-4 border-purple" />
                <a href="#guias-de-turismo" className="font-semibold uppercase" onClick={(e) => handleClick('guias-de-turismo', e)}>GUÍAS DE TURISMO</a>
                <hr className="my-4 border-purple" />
                <a href="#experiencias-turisticas-apia" className="font-semibold uppercase" onClick={(e) => handleClick('experiencias-turisticas-apia', e)}>EXPERIENCIAS TURÍSTICAS</a>
                <hr className="my-4 border-purple" />
                <a href="#servicio-hospedaje" className="font-semibold uppercase" onClick={(e) => handleClick('servicio-hospedaje', e)}>SERVICIO DE HOSPEDAJE</a>
                <hr className="my-4 border-purple" />
                <a href="#servicio-gastronomico-apia-armenia" className="font-semibold uppercase" onClick={(e) => handleClick('servicio-gastronomico-apia-armenia', e)}>SERVICIO GASTRÓNOMICO</a>
                <hr className="my-4 border-purple" />
                <a href="#referencias" className="font-semibold uppercase" onClick={(e) => handleClick('referencias', e)}>REFERENCIAS</a>
                <hr className="my-4 border-purple" />
            </div>
        </div>
      </div>
    </LeftTopIconLayout>
  );
};
