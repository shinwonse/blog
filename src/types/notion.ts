export type Category = {
  id: string;
  type: string;
  multiSelect: {
    id: string;
    name: string;
    color: string;
  }[];
};

export type Slug = {
  id: string;
  type: string;
  richText: {
    plainText: string;
  }[];
};

export type Description = {
  id: string;
  type: string;
  richText: {
    plainText: string;
  }[];
};

export type Title = {
  id: string;
  type: string;
  title: {
    plainText: string;
  }[];
};

export type Post = {
  object: string;
  createdBy: { object: string; id: string };
  createdTime: string;
  id: string;
  lastEditedBy: { object: string; id: string };
  lastEditedTime: string;
  properties: {
    category: Category;
    slug: Slug;
    title: Title;
    description: Description;
  };
  url: string;
};

export type TOCItem = {
  id: string;
  tagName: string;
  text: string;
};
