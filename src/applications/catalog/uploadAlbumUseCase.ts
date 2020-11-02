import { UploadAlbumUseCasePort } from "../../ports/input/catalog";
import { UseCase } from "../infrastructure";

export default class UploadAlbumUseCase extends UseCase implements UploadAlbumUseCasePort{
  async execute(): Promise<any> {
      return {};
  }
}
