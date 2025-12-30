import { ConfigProvider } from "@/context/ConfigProvider";
import { ZerodhaProvider } from "@/context/ZerodhaContext";
import Dashboard from "@/components/Dashboard";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <ConfigProvider>
      <ZerodhaProvider>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <Dashboard />
          <MadeWithDyad />
        </div>
      </ZerodhaProvider>
    </ConfigProvider>
  );
};

export default Index;