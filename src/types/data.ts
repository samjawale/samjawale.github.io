export type Project = {
  name: string;
  description: string;
};

export type Company = {
  name: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  projects: Array<Project>;
};
