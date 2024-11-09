
import { useEffect } from 'react';
import io from 'socket.io-client';

const useWebSocket = (url) => {
  useEffect(() => {
    const socket = io(url);

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };
  }, [url]);
};

export default useWebSocket;