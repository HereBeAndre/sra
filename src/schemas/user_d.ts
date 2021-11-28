import { Moment } from 'moment';

export interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Moment;
}
