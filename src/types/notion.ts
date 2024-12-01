export type Category = {
  color: string;
  id: string;
  name: string;
};

export interface Post {
  created_time: '2023-09-30T11:42:00.000Z';
  id: 'dcd06d51-9720-4bb6-ba0e-b5faf7d35a21';
  last_edited_time: string;
  properties: { category: Category[]; slug: string; title: string };
}

export type TOCItem = {
  id: string;
  tagName: string;
  text: string;
};
