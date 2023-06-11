export interface ISidebar {
  id: number;
  name: string;
  route: string;
  children?: IChilLink[];
}

interface IChilLink {
  name: string;
  link: string;
}
