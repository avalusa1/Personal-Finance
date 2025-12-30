import yaml from "js-yaml";

export async function loadConfig(): Promise<any> {
  // For now, load from local file. In production, fetch from remote repo.
  const res = await fetch("/src/config/default.yaml");
  const text = await res.text();
  return yaml.load(text);
}