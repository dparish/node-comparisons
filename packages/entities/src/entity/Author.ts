import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Authors")
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
