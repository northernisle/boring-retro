export type Room = {
  id: string;
  name: string;
  slug?: string;
  createdAt: Date;
};

export type CreateRoom = {
  data: {
    name: string;
    slug?: string;
  };
};

export type CreateRoomRequest = {
  name: string;
  createSlug: boolean;
};
