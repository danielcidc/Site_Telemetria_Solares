import 'typeface-roboto';
import 'typeface-montserrat';

export default function Home(){
  return(
    <div className='bg-blue-900 flex flex-col items-center'>
      <h1 className='text-7xl text-yellow-400 font-roboto mt-3'
      style={{textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'}}>
        DADOS TELEMÉTRICOS
      </h1>

      <h2 className='text-2xl text-yellow-100 font-montserrat mb-2'
      style={{textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'}}>
        dados importantes para a leitura remota do barco
      </h2>

      <div className='relative w-full h-screen flex grow'>
        <img
         src='https://essolar.com.br/wp-content/uploads/2020/05/essolar1305.png'
         alt='Imagem de Fundo'
         className='absolute inset-0 w-full h-full object-cover'
         width={1000}
         />
      </div>

      <img
        src='https://media.licdn.com/dms/image/C4E0BAQEz53FLbmnA6w/company-logo_200_200/0/1627007835135?e=2147483647&v=beta&t=A9ljiHIx2eaFAMOfECbG3t6CYYC5UjtnjoLZAVMPtsc'
        alt='Logo Solares'
        className='absolute top-0 left-0'
        style={{ width: 140, height: 124}}
        
      />
    </div>
  );

}