import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Medicamento } from "../entities/medicamento.entity";

@Injectable()
export class MedicamentoService {

  constructor(
    @InjectRepository(Medicamento)
    private medicamentoRepository: Repository<Medicamento>,
  ) {}

  async findByAll(): Promise<Medicamento[]> {
    return this.medicamentoRepository.find();
  }

  async findById(id: number): Promise<Medicamento> {
    const medicamento = await this.medicamentoRepository.findOne({ where: { id } });
    if (!medicamento) {
      throw new HttpException("Medicamento não encontrado", HttpStatus.NOT_FOUND);
    }
    return medicamento;
  }

  async findByNome(nome: string): Promise<Medicamento[]> {
    return this.medicamentoRepository.find({
      where: { nome: ILike(`%${nome}%`) }
    });
  }

  async create(medicamento: Medicamento): Promise<Medicamento> {
    return this.medicamentoRepository.save(medicamento);
  }

  async update(medicamento: Medicamento): Promise<Medicamento> {
    const medicamentoExistente = await this.medicamentoRepository.findOneBy({ id: medicamento.id });
    if (!medicamentoExistente) {
      throw new HttpException("Medicamento não encontrado", HttpStatus.NOT_FOUND);
    }
    return this.medicamentoRepository.save(medicamento);
  }

  async delete(id: number): Promise<DeleteResult> {
    const medicamentoExistente = await this.medicamentoRepository.findOneBy({ id });
    if (!medicamentoExistente) {
      throw new HttpException("Medicamento não encontrado", HttpStatus.NOT_FOUND);
    }
    return this.medicamentoRepository.delete(id);
  }

}
