import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import socketIOClient from 'socket.io-client';
import 'typeface-roboto';
import 'typeface-montserrat';


const socketTest = socketIOClient("https://telemetria-trainee-2023.onrender.com");

interface DadosTelemetricos {
  correnteMotor: number;
  correnteBaterias: number;
  temperatura: number;
  umidade: number;
  tensaoAlimentacaoPCB: number;
  estadoStringSolar1: string;
  estadoStringSolar2: string;
  tensaoSaidaMPPT: number;
  correnteMPPT: number;
  velocidadeBarco: number;
  latitude: number;
  longitude: number;
  updateAt: string;
}

const Home: React.FC = () => {
  const [fundoPreto, setFundoPreto] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [dadosTelemetricos, setDadosTelemetricos] = useState<DadosTelemetricos>({
    correnteMotor: 0,
    correnteBaterias: 0,
    temperatura: 0,
    umidade: 0,
    tensaoAlimentacaoPCB: 0,
    estadoStringSolar1: "0",
    estadoStringSolar2: "0",
    tensaoSaidaMPPT: 0,
    correnteMPPT: 0,
    velocidadeBarco: 0,
    latitude: 0,
    longitude: 0,
    updateAt: "00/00/0000 00:00:00"
  });

  useEffect(() => {
    
    socketTest.on('info', (novosDados: DadosTelemetricos) => {
      console.log(novosDados); // Verifica os valores recebidos
      setDadosTelemetricos(novosDados);
    });

    setSocket(socketTest);

    return () => {
      socketTest.disconnect();
    };
  }, []);

  const handleButtonClick = () => {
    setFundoPreto(!fundoPreto);

    if (socket) {
      const newData = {
        correnteMotor: dadosTelemetricos.correnteMotor,
        correnteBaterias: dadosTelemetricos.correnteBaterias,
        temperatura: dadosTelemetricos.temperatura,
        umidade: dadosTelemetricos.umidade,
        tensaoAlimentacaoPCB: dadosTelemetricos.tensaoAlimentacaoPCB,
        estadoStringSolar1: dadosTelemetricos.estadoStringSolar1,
        estadoStringSolar2: dadosTelemetricos.estadoStringSolar2,
        tensaoSaidaMPPT: dadosTelemetricos.tensaoSaidaMPPT,
        correnteMPPT: dadosTelemetricos.correnteMPPT,
        velocidadeBarco: dadosTelemetricos.velocidadeBarco,
        latitude: dadosTelemetricos.latitude,
        longitude: dadosTelemetricos.longitude,
        updateAt: dadosTelemetricos.updateAt,
      };

      socket.emit('info', newData);
    }
  };

  return (
    <div className="bg-blue-900 flex flex-col items-center">
      <h1
        className="text-7xl text-yellow-400 font-roboto mt-3"
        style={{
          textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
        }}
      >
        DADOS TELEMÉTRICOS
      </h1>

      <h2
        className="text-2xl text-yellow-100 font-montserrat mb-2"
        style={{
          textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
        }}
      >
        dados importantes para a leitura remota do barco
      </h2>

      <div className="relative w-full h-screen flex-grow">
        <img
          src={fundoPreto ? 'https://cdn.11.vuzi.com.br/goquadros/file/pretatext.webp' : 'https://essolar.com.br/wp-content/uploads/2020/05/essolar1305.png'}
          alt="Imagem de Fundo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-2xl font-bold absolute inset-0 flex items-center justify-center">
            Corrente do Motor: {dadosTelemetricos.correnteMotor} A<br />
            Corrente das Baterias: {dadosTelemetricos.correnteBaterias} A<br />
            Temperatura: {dadosTelemetricos.temperatura} °C<br />
            Umidade: {dadosTelemetricos.umidade}%<br />
            Tensão de Alimentação do PCB: {dadosTelemetricos.tensaoAlimentacaoPCB} V<br />
            String Solar 1: {dadosTelemetricos.estadoStringSolar1 !== "0" ? 'ON' : 'OFF'}<br />
            String Solar 2: {dadosTelemetricos.estadoStringSolar2 !== "0" ? 'ON' : 'OFF'}<br />
            Tensão de Saída do MPPT: {dadosTelemetricos.tensaoSaidaMPPT} V<br />
            Corrente do MPPT: {dadosTelemetricos.correnteMPPT} A<br />
            Velocidade do Barco: {dadosTelemetricos.velocidadeBarco} km/h<br />
            Latitude: {dadosTelemetricos.latitude}<br />
            Longitude: {dadosTelemetricos.longitude}<br />
            Última Atualização: {dadosTelemetricos.updateAt}
          </div>
          
          <img
            src="https://img.freepik.com/vetores-premium/ilustracao-de-quadro-verde_9845-457.jpg"
            alt="Quadro de exibição dos dados"
            className="w-4/5 h-4/5"
          />
          
        </div>

        <div style={{ position: 'absolute', top: '-124px', left: '0' }}>
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQEz53FLbmnA6w/company-logo_200_200/0/1627007835135?e=2147483647&v=beta&t=A9ljiHIx2eaFAMOfECbG3t6CYYC5UjtnjoLZAVMPtsc"
            alt="Logo Solares"
            style={{ width: '140px', height: '124px' }}
          />
        </div>

        <button
          className="bg-red-600 hover:bg-red-800 rounded-full w-10 h-10 font-semibold text-white"
          style={{ position: 'absolute', top: '1rem', left: '1rem' }}
          onClick={handleButtonClick}
        >
          {fundoPreto ? 'OFF' : 'ON'}
        </button>
      </div>
    </div>
  );
};

export default Home;