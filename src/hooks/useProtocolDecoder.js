import { useState, useCallback } from 'react';
import init, { ProtocolDecoder, ProtocolType } from '@stella/protocol-decoder';

export const useProtocolDecoder = () => {
  const [decoder, setDecoder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize the WebAssembly module
  const initializeDecoder = useCallback(async protocol => {
    try {
      await init();
      const newDecoder = new ProtocolDecoder(protocol);
      setDecoder(newDecoder);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  // Decode a frame
  const decodeFrame = useCallback(
    async rawData => {
      if (!decoder) {
        throw new Error('Decoder not initialized');
      }

      try {
        const result = await decoder.decode_frame(new Uint8Array(rawData));
        return result;
      } catch (err) {
        throw new Error(`Failed to decode frame: ${err.message}`);
      }
    },
    [decoder]
  );

  return {
    decoder,
    isLoading,
    error,
    initializeDecoder,
    decodeFrame,
    ProtocolType,
  };
};
