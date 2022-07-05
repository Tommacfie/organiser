import { DoctorType } from './Doctor';

export type AppointmentType = {
  name: string;
  date: Date;
  doctor: DoctorType;
};
