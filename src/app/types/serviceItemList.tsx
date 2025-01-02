interface ListItem {
  title: string;
  sevice: string[];
}

interface ItemWork {
  title: string;
  price: number | string;
  video: string;
  time: string;
  listWork: ListItem[];
}

export type { ItemWork, ListItem };
