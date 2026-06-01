import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users_v2')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string; // Sigue siendo opcional porque lo genera la base de datos al insertar

  @Column({ unique: true })
  username: string; // Obligatorio

  @Column({ unique: true }) // Añadimos unicidad para proteger el índice de búsqueda
  email: string; // Obligatorio

  @Column()
  password: string; // Obligatorio

  @Column({ default: true })
  isActive: boolean; // Obligatorio con valor por defecto

  @Column({ nullable: true })
  profile?: string; // Opcional legítimo
}