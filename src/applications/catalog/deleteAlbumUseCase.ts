import { DeleteAlbumUseCasePort } from "../../ports/catalog";
import { UseCase } from "../infrastructure";

export default class DeleteAlbumUseCase extends UseCase implements DeleteAlbumUseCasePort {
  async execute(): Promise<any> {
      return {};
  }
}
