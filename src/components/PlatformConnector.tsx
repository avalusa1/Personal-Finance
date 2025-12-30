import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import ZerodhaConnectModal from "./ZerodhaConnectModal";

type Platform = {
  name: string;
  api: string;
  fields: string[];
};

const PlatformConnector = ({ platform }: { platform: Platform }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Only Zerodha is supported for now
  const isZerodha = platform.api === "zerodha";

  const handleLogin = () => {
    setLoading(true);
    // Redirect to backend endpoint that starts OAuth flow
    // Replace with your backend URL
    window.location.href = `/api/zerodha/login`;
  };

  return (
    <>
      <div className="flex items-center justify-between bg-gray-50 rounded px-4 py-2 border">
        <span className="font-medium">{platform.name}</span>
        {isZerodha ? (
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
        ) : (
          <Button variant="outline" size="sm" disabled>
            Coming Soon
          </Button>
        )}
      </div>
    </>
  );
};

export default PlatformConnector;