import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { FaYoutube, FaTiktok, FaTwitter, FaGithub } from 'react-icons/fa';

// Define una interfaz para las propiedades del modelo
interface ModelProps {
  url: string;
}

// Componente para cargar y mostrar el modelo GLB
function Model({ url }: ModelProps) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} dispose={null} />;
}

function App() {
  const rotationSpeed = 4;
  return (
    <div className='relative flex items-center justify-center w-full h-full overflow-x-scroll bg-black'>
      <div className='absolute z-10 flex flex-col items-center top-10'>
        <img className='w-72' src="/assets/logos/logo.png" alt="Canibalización Tecnológica" />
        <div className='flex flex-col items-center gap-4 mt-10'>
          <a
            href="https://www.youtube.com/@Canibalizaci%C3%B3nTecnol%C3%B3gica"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-2 text-white'
          >
            <FaYoutube size={56} />
          </a>
          <a
            href="https://www.tiktok.com/@canibalismo_tecnologico"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-2 text-white'
          >
            <FaTiktok size={56} />
          </a>
          <a
            href="https://x.com/CanibalTech"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-2 text-white'
          >
            <FaTwitter size={56} />
          </a>
          <a
            href="https://github.com/canibalizaciontecnologica"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-2 text-white'
          >
            <FaGithub size={56} />
          </a>
        </div>
        <span className='mt-10 text-xl text-white'>¡Siguenos!</span>
      </div>
      <div className='z-0 flex w-screen h-screen overflow-hidden'>
        <div className='relative w-1/2'>
          <Canvas>
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Model url="/assets/models/jcastanodev.glb" />
            </Suspense>
            <OrbitControls autoRotate={true} autoRotateSpeed={rotationSpeed} />
            <PerspectiveCamera makeDefault position={[20, 0, 0]} fov={5} />
          </Canvas>
          <div className='absolute left-0 right-0 flex justify-center bottom-10'>
            <a href='/jcastanodev' rel='noopener noreferrer' className='px-4 py-2 text-2xl font-bold text-black bg-white rounded-xl'>JCASTANODEV</a>
          </div>
        </div>
        <div className='relative w-1/2'>
          <Canvas>
            <ambientLight intensity={1.2} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Model url="/assets/models/camiluds.glb" />
            </Suspense>
            <OrbitControls autoRotate={true} autoRotateSpeed={-rotationSpeed} />
            <PerspectiveCamera makeDefault position={[3, 0, 5]} fov={17} />
          </Canvas>
          <div className='absolute left-0 right-0 flex justify-center bottom-10'>
            <a href='/camiluds' rel='noopener noreferrer' className='px-4 py-2 text-2xl font-bold text-black bg-white rounded-xl'>CAMILUDS</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;