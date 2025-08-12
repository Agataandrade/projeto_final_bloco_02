import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tb_farmacia' })
export class Medicamento {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  fabricante: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  dataDeValidade: string;

  @IsNotEmpty()
  @Column({ length: 20, nullable: false })
  preco: string;

}
