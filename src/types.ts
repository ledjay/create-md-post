export type postDataType = {
  title: string;
  date: string;
  author: string;
  description: string;
  category?: string;
  tags?: string;
};

export type lingoStringsTypes = { [key: string]: string[] };

export type configFileType = {
  path: string;
  extention: string;
  author: string;
  hasCategories: boolean;
  hasTags: boolean;
};
