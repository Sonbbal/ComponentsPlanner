export type SpecData = {
  name: string;
  content: string;
};

export type StyleData = {
  name: "layout" | "color" | "borderColor";
  content: string;
};

export interface BoxData {
  id: number;
  name: string;
  parent: number;
  order: number;
  childrens?: number[];
  specs?: SpecData[];
  styles?: StyleData[];
}
