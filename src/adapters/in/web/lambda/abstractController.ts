import { Logger } from "../../../infrastructure";
import { Response, Session } from "../models";

export default abstract class AbstractController {

    protected abstract execute(event: any, context: any, session: Session, logger: Logger): Promise<Response>;

}
