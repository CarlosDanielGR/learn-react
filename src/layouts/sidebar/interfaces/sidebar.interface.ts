export interface ISidebar {
  name: string;
  link: string;
  children?: IChilLink[];
}

interface IChilLink {
  name: string;
  link: string;
}
