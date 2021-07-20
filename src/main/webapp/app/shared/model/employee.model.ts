import dayjs from 'dayjs';
import { IDepartment } from 'app/shared/model/department.model';

export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string | null;
  hireDate?: string;
  salary?: number;
  commissionPct?: number | null;
  manager?: IEmployee | null;
  department?: IDepartment | null;
}

export const defaultValue: Readonly<IEmployee> = {};
