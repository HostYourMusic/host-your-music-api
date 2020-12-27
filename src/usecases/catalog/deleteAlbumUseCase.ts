import { DeleteAlbumUseCasePort } from "../../core/ports/input/catalog";
import { UseCase } from "../infrastructure";

export default class DeleteAlbumUseCase extends UseCase implements DeleteAlbumUseCasePort {
  async execute(): Promise<any> {
      return {};
  }
}
