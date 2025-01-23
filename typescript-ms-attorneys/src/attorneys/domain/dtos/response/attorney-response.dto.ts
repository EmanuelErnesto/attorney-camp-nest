type AttorneyResponseProps = {
  id: string;
  name: string;
  email: string;
  oabCode: string;
  createdAt: Date;
  updatedAt: Date;
};

export class AttorneyrResponseDto {
  id: string;
  name: string;
  email: string;
  oabCode: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: AttorneyResponseProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (this.id = data.id),
      (this.name = data.name),
      (this.email = data.email),
      (this.oabCode = data.oabCode),
      (this.createdAt = data.createdAt),
      (this.updatedAt = data.updatedAt);
  }
}
