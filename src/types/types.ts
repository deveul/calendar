export type Slot = {
  startTime: Date;
  endTime: Date;
};

export type Day = {
  slots: Slot[];
  date: Date;
};
