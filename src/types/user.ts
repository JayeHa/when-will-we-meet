export type UserInfo = {
  id: string;
  name: string;
  profile: string;
  meetings: string[];
} | null;

export type User = {
  info: UserInfo;
  validated: boolean;
};
