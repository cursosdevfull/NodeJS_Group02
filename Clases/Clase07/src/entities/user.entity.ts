import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PhotoEntity } from './photo.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  firstName: string;

  @Column('varchar', { length: 50 })
  lastName: string;

  @Column('varchar', { length: 100 })
  email: string;

  @Column('varchar', { length: 50 })
  password: string;

  @OneToMany((type) => PhotoEntity, (photo) => photo.user)
  photos: PhotoEntity[];
}
