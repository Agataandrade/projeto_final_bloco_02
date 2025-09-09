import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicamentoModule } from './medicamentos/medicamento.module';
import { Medicamento } from './medicamentos/entities/medicamento.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '7800',
    database: 'db_farmacia',
    entities: [Medicamento],
    synchronize: true, 
   
  }),
  MedicamentoModule,
],
 controllers: [],
  providers: [],

})
export class AppModule {}
