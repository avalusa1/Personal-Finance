import React, { createContext, useContext, useEffect, useState } from "react";
import { loadConfig } from "@/utils/configLoader";

type ConfigContextType = {
  config: any;
  loading: boolean;
  error: string | null;
};

const ConfigContext = createContext<ConfigContextType>({
  config: null,
  loading: true,
  error: null,
});

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConfig()
      .then((cfg) => {
        setConfig(cfg);
        setLoading(false);
      })
      .catch((e) => {
        setError("Failed to load config");
        setLoading(false);
      });
  }, []);

  return (
    <ConfigContext.Provider value={{ config, loading, error }}>
      {children}
    </ConfigContext.Provider>
  );
};