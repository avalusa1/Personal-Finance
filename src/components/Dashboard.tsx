import React from "react";
import { useConfig } from "@/context/ConfigProvider";
import PlatformConnector from "./PlatformConnector";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, TrendingUp, Layers } from "lucide-react";

const SectionSummary = () => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          Investment Summary
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div>
          <div className="text-2xl font-bold">₹12,34,567</div>
          <div className="text-gray-500">Total Portfolio Value</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">+₹34,567</div>
          <div className="text-gray-500">Today's Gain</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600">₹2,00,000</div>
          <div className="text-gray-500">Available Funds</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const SectionHoldings = () => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-500" />
          Holdings
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500">
              <th className="px-2 py-1 text-left">Stock</th>
              <th className="px-2 py-1 text-right">Qty</th>
              <th className="px-2 py-1 text-right">Avg Price</th>
              <th className="px-2 py-1 text-right">Current Price</th>
              <th className="px-2 py-1 text-right">P&L</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-1">TCS</td>
              <td className="px-2 py-1 text-right">10</td>
              <td className="px-2 py-1 text-right">₹3,200</td>
              <td className="px-2 py-1 text-right">₹3,400</td>
              <td className="px-2 py-1 text-right text-green-600">+₹2,000</td>
            </tr>
            <tr>
              <td className="px-2 py-1">INFY</td>
              <td className="px-2 py-1 text-right">15</td>
              <td className="px-2 py-1 text-right">₹1,500</td>
              <td className="px-2 py-1 text-right">₹1,650</td>
              <td className="px-2 py-1 text-right text-green-600">+₹2,250</td>
            </tr>
            <tr>
              <td className="px-2 py-1">RELIANCE</td>
              <td className="px-2 py-1 text-right">5</td>
              <td className="px-2 py-1 text-right">₹2,400</td>
              <td className="px-2 py-1 text-right">₹2,350</td>
              <td className="px-2 py-1 text-right text-red-600">-₹250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

const SectionPerformance = () => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-orange-500" />
          Performance
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-40 flex items-center justify-center text-gray-400">
        {/* Placeholder for chart */}
        <span>Performance chart will appear here.</span>
      </div>
    </CardContent>
  </Card>
);

const sectionMap: Record<string, React.FC> = {
  summary: SectionSummary,
  holdings: SectionHoldings,
  performance: SectionPerformance,
};

const Dashboard = () => {
  const { config, loading, error } = useConfig();

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!config) return <div>No config loaded.</div>;

  return (
    <div className="max-w-3xl mx-auto py-8 px-2">
      <h1 className="text-3xl font-bold mb-6 text-center">Personal Finance Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Connect Your Platforms</h2>
        <div className="flex flex-col gap-2">
          {config.platforms?.map((platform: any) =>
            platform.enabled ? (
              <PlatformConnector key={platform.name} platform={platform} />
            ) : null
          )}
        </div>
      </div>
      {config.dashboard?.sections?.map((section: any, idx: number) => {
        const SectionComponent = sectionMap[section.type];
        return SectionComponent ? (
          <SectionComponent key={section.type + idx} />
        ) : null;
      })}
    </div>
  );
};

export default Dashboard;