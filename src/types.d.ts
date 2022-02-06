declare module "types" {
  export type Employee = {
    name: string;
    office: string;
    gitHub?: string;
    twitter?: string;
    linkedIn?: string;
    imagePortraitUrl: string;
  };

  export type FilterParam = {
    name: string;
    office: string;
  };

  export type SortParam = {
    method: number;
    var: "name" | "office";
  };
}
