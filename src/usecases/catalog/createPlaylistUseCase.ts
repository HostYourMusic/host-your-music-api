import { CreatePlaylistUseCasePort } from "../../core/ports/input/catalog";
import { UseCase } from "../infrastructure";

export default class CreatePlaylistUseCase extends UseCase implements CreatePlaylistUseCasePort {
  async execute(): Promise<any> {
      return {};
  }
}