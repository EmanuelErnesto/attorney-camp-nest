import { IAttorney } from 'src/attorneys/domain/models/entities/attorneys.interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tb_attorneys')
export class Attorney implements IAttorney {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 240 })
  name: string;

  @Column({ length: 240, unique: true })
  email: string;

  @Column({ length: 240 })
  password: string;

  @Column({ length: 240, unique: true })
  oabCode: string;

  @CreateDateColumn()
  @Column({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn()
  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
