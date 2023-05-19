import React, { useState } from 'react';
import 'typeface-roboto';
import 'typeface-montserrat';

export default function Home() {
  const [fundoPreto, setFundoPreto] = useState(false);

  const handleButtonClick = () => {
    setFundoPreto(!fundoPreto);
  };

  return (
    <div className= 'bg-blue-900 flex flex-col items-center'>
      <h1
        className='text-7xl text-yellow-400 font-roboto mt-3'
        style={{
          textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
        }}
      >
        DADOS TELEMÉTRICOS
      </h1>

      <h2
        className='text-2xl text-yellow-100 font-montserrat mb-2'
        style={{
          textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
        }}
      >
        dados importantes para a leitura remota do barco
      </h2>

      <div className='relative w-full h-screen flex-grow'>
        <img
          src={fundoPreto ? 'https://cdn.11.vuzi.com.br/goquadros/file/pretatext.webp' : 'https://essolar.com.br/wp-content/uploads/2020/05/essolar1305.png'}
          alt='Imagem de Fundo'
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 flex items-center justify-center'>
          <img
            src='https://img.freepik.com/vetores-premium/ilustracao-de-quadro-verde_9845-457.jpg'
            alt='Quadro de exibição dos dados'
            className='w-4/5 h-4/5'
          />
        </div>

        <div style={{ position: 'absolute', top: '-124px', left: '0' }}>
          <img
            src='https://media.licdn.com/dms/image/C4E0BAQEz53FLbmnA6w/company-logo_200_200/0/1627007835135?e=2147483647&v=beta&t=A9ljiHIx2eaFAMOfECbG3t6CYYC5UjtnjoLZAVMPtsc'
            alt='Logo Solares'
            style={{ width: '140px', height: '124px' }}
          />
        </div>

        <button
          className='bg-red-600 hover:bg-red-800 rounded-full w-10 h-10 font-semibold text-white'
          style={{ position: 'absolute', top: '1rem', left: '1rem' }}
          onClick={handleButtonClick}
        >
          {fundoPreto ? 'OFF' : 'ON'}
        </button>
      </div>
    </div>
  );
}