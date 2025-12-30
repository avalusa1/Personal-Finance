import { ConfigProvider } from "@/context/ConfigProvider";
import Dashboard from "@/components/Dashboard";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <ConfigProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Dashboard />
        <MadeWithDyad />
      </div>
    </ConfigProvider>
  );
};

export default Index;