import React from "react";
import { useConfig } from "@/context/ConfigProvider";
import PlatformConnector from "./PlatformConnector";

const SectionSummary = () => (
  <div className="p-4 bg-white rounded shadow mb-4">
    <h2 className="text-xl font-bold mb-2">Summary</h2>
    <p className="text-gray-600">Your investment summary will appear here.</p>
  </div>
);

const SectionHoldings = () => (
  <div className="p-4 bg-white rounded shadow mb-4">
    <h2 className="text-xl font-bold mb-2">Holdings</h2>
    <p className="text-gray-600">Your holdings across platforms will appear here.</p>
  </div>
);

const SectionPerformance = () => (
  <div className="p-4 bg-white rounded shadow mb-4">
    <h2 className="text-xl font-bold mb-2">Performance</h2>
    <p className="text-gray-600">Performance charts and analytics will appear here.</p>
  </div>
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
    <div className="max-w-2xl mx-auto py-8">
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