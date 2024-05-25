import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permission.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 30 })
  firstName: string;

  @Column({ type: 'varchar', length: 30 })
  lastName: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @Column({ type: 'date' })
  dob: Date;

  @Column({ type: 'varchar' })
  password: string;

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedDate: Date;
}
