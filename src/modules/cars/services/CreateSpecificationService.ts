import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  // eslint-disable-next-line prettier/prettier
  constructor(private specificationsRepository: ISpecificationRepository) { }
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
export { CreateSpecificationService };
