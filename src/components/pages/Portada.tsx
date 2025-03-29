import { DEFAULT_URL } from '../../Constant';

export default function Portada() {
  return (
    <div className={`flex items-center justify-center w-full min-h-screen py-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 relative bg-yellow`}>
      <img
        src={`${DEFAULT_URL}assets/logos/rodando-por-el-eje-main.webp`}
        alt='Rodando por el eje cafetero'
        className="w-full max-h-[80vh] max-w-7xl object-contain"
      />
    </div>
  );
};
