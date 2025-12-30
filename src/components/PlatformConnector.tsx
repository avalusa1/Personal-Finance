import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

type Platform = {
  name: string;
  api: string;
  fields: string[];
};

const PlatformConnector = ({ platform }: { platform: Platform }) => {
  // In a real app, you'd handle OAuth or credential input here
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded px-4 py-2 border">
      <span className="font-medium">{platform.name}</span>
      <Button variant="outline" size="sm">
        <LogIn className="w-4 h-4 mr-1" />
        Connect
      </Button>
    </div>
  );
};

export default PlatformConnector;