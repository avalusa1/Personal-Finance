import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

type ZerodhaConnectModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin: () => void;
  loading?: boolean;
};

const ZerodhaConnectModal: React.FC<ZerodhaConnectModalProps> = ({
  open,
  onOpenChange,
  onLogin,
  loading,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Connect to Zerodha</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="mb-4 text-gray-600">
            Securely connect your Zerodha account to view your holdings and performance.
          </p>
          <Button
            className="w-full"
            onClick={onLogin}
            disabled={loading}
          >
            <LogIn className="w-4 h-4 mr-2" />
            {loading ? "Redirecting..." : "Login with Zerodha"}
          </Button>
        </div>
        <DialogFooter>
          <p className="text-xs text-gray-400">
            You will be redirected to Zerodha for secure login.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ZerodhaConnectModal;