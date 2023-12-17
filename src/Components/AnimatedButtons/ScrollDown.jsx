
import { MdDoubleArrow } from 'react-icons/md';

const ScrollDown = () => {
  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '50%',
    outline: 'none',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    animation: 'jump 1s infinite',
    '@keyframes jump': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateX(0)',
      },
      '40%': {
        transform: 'translateX(20px)',
      },
      '60%': {
        transform: 'translateX(10px)',
      },
    },
  };

  return (
    <button style={buttonStyle}>
      <MdDoubleArrow style={{ fontSize: '24px' }} />
    </button>
  );
};

export default ScrollDown;
