import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  fileName: string;

  @ManyToOne((type) => UserEntity, (user) => user.photos)
  user: UserEntity;
}
