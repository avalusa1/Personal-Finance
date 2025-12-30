import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, CheckCircle2, LogOut } from "lucide-react";
import ZerodhaConnectModal from "./ZerodhaConnectModal";
import { useZerodha } from "@/context/ZerodhaContext";

type Platform = {
  name: string;
  api: string;
  fields: string[];
};

const PlatformConnector = ({ platform }: { platform: Platform }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { connected, user, connect, disconnect } = useZerodha();

  const isZerodha = platform.api === "zerodha";

  const handleLogin = () => {
    setLoading(true);
    // In real app, redirect to backend endpoint for OAuth
    // For mock, simulate connection
    setTimeout(() => {
      setLoading(false);
      setModalOpen(false);
      connect();
    }, 1200);
    // window.location.href = `/api/zerodha/login`;
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 rounded px-4 py-2 border">
      <span className="font-medium">{platform.name}</span>
      {isZerodha ? (
        connected ? (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">
              Connected{user?.name ? ` as ${user.name}` : ""}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={disconnect}
              className="ml-2 text-red-500 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-1" />
              Disconnect
            </Button>
          </div>
        ) : (
          <>
            <Button variant="outline" size="sm" onClick={() => setModalOpen(true)}>
              <LogIn className="w-4 h-4 mr-1" />
              Connect
            </Button>
            <ZerodhaConnectModal
              open={modalOpen}
              onOpenChange={setModalOpen}
              onLogin={handleLogin}
              loading={loading}
            />
          </>
        )
      ) : (
        <Button variant="outline" size="sm" disabled>
          Coming Soon
        </Button>
      )}
    </div>
  );
};

export default PlatformConnector;