export interface ILinks {
  id: number;
  name: string;
  route: string;
}

export interface ISidebar extends ILinks {
  children?: IChilLink;
}

interface IChilLink {
  title: string;
  links: ILinks[];
}
