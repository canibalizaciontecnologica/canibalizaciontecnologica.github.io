import { DEFAULT_URL } from '../../Constant';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';
import BaseLayout from '../../layouts/BaseLayout';
import LeftTopIconLayout from '../../layouts/LeftTopIconLayout';

export default function Playlist({route}: BaseLayoutProps) {
  return (
    <LeftTopIconLayout id='playlist' color='yellow' width='w-full'>
      <BaseLayout route={route} />
      <div className="flex flex-wrap text-sm text-purple md:flex-nowrap">
        <div className='flex items-center justify-center w-full mt-0 text-left md:w-1/2 md:min-h-screen'>
            <div className='w-full px-5 py-10'>
                <h2 className="mb-2 text-6xl font-bold uppercase text-wrap">ESCUCHA LA PLAYLIST:</h2>
                <h2 className="mb-2 text-5xl font-bold uppercase">RODANDO POR EL EJE CAFETERO</h2>
                <a href="https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg" target="_blank" className='text-xl'>https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg</a>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-5 py-10 md:w-1/2 md:min-h-screen bg-purple">
            <img src={`${DEFAULT_URL}assets/logos/rodando-por-el-eje-purple-short.webp`} alt={route?.descriptiveSummary} className='w-full max-w-72' loading='lazy'/>
            <a href="https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg" target="_blank"><img src={`${DEFAULT_URL}assets/images/8-rodando-por-el-eje-spotify.webp`} alt={route?.descriptiveSummary} className='w-full max-w-72'/></a>
        </div> 
      </div>
    </LeftTopIconLayout>
  );
};
