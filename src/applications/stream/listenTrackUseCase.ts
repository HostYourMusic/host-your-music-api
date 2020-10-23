import { ListenTrackUseCasePort } from "../../ports/stream";
import { UseCase } from "../infrastructure";

export default class ListenTrackUseCase extends UseCase  implements ListenTrackUseCasePort{
  async execute(): Promise<any> {
      return {};
  }
}
