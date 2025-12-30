import React, { createContext, useContext, useState } from "react";

type ZerodhaUser = {
  name: string;
  email: string;
};

type ZerodhaContextType = {
  connected: boolean;
  user: ZerodhaUser | null;
  connect: () => void;
  disconnect: () => void;
};

const ZerodhaContext = createContext<ZerodhaContextType>({
  connected: false,
  user: null,
  connect: () => {},
  disconnect: () => {},
});

export const useZerodha = () => useContext(ZerodhaContext);

export const ZerodhaProvider = ({ children }: { children: React.ReactNode }) => {
  // In real app, this would be persisted and fetched from backend
  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState<ZerodhaUser | null>(null);

  const connect = () => {
    // In real app, fetch user info after OAuth
    setConnected(true);
    setUser({
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
    });
  };

  const disconnect = () => {
    setConnected(false);
    setUser(null);
  };

  return (
    <ZerodhaContext.Provider value={{ connected, user, connect, disconnect }}>
      {children}
    </ZerodhaContext.Provider>
  );
};