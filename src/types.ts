export type Region = {
  name: string;
  url: string;
  status?: Status;
};

export type Status = {
  description: string;
  indicator: string;
};

export type StatusResponse = {
  page: any;
  status: Status;
};
