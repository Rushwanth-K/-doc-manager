export type Template = {
  id: number;
  name: string;
  category: string;
  placeholderSchema: string[];
}

export async function fetchTemplates(): Promise<Template[]> {
  const res = await fetch('http://localhost:3000/api/templates')
  const data = await res.json()
  return data
}

export const templates: Template[] = []