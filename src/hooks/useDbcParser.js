import { useState, useCallback } from 'react';
import init, { DbcFile } from '@stella/dbc-parser';

export const useDbcParser = () => {
  const [parser, setParser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize the WebAssembly module
  const initializeParser = useCallback(async () => {
    try {
      await init();
      const newParser = new DbcFile();
      setParser(newParser);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  // Parse DBC file content
  const parseDbc = useCallback(
    async content => {
      if (!parser) {
        throw new Error('Parser not initialized');
      }

      try {
        await parser.parse_dbc(content);
        const messages = await parser.get_messages();
        return messages;
      } catch (err) {
        throw new Error(`Failed to parse DBC: ${err.message}`);
      }
    },
    [parser]
  );

  return {
    parser,
    isLoading,
    error,
    initializeParser,
    parseDbc,
  };
};
