import { FC } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../public/animations/animation.json'; // Ajuste o caminho para o seu arquivo de animação

interface AnimationComponentProps {
  size?: number; // Opcional para ajustar o tamanho
}

const AnimationComponent: FC<AnimationComponentProps> = ({ size = 30 }) => {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        autoplay={true}
        style={{ width: size, height: size }} // Ajuste o tamanho conforme necessário
      />
    </div>
  );
};

export default AnimationComponent;