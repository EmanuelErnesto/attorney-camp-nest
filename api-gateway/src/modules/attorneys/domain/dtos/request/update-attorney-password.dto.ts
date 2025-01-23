export class UpdateAttorneyPasswordDto {
  id: string;
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}
