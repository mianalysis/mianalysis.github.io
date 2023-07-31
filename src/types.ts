export interface ModuleCategory {
  name: string;
  slug: string;
  path: string;
  description: string;
  sub_categories: ModuleCategory[];
  modules: Module[];
}

export interface Module {
  name: string;
  slug: string;
  path: string;
  shortDescription: string;
  fullDescription: string;
  parameters: Parameter[];
}

export interface Parameter {
  name: string;
  description: string;
  subParameters?: Parameter[];
}
