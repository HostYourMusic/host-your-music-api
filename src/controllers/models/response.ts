import WebAdapterError from "./webAdapterError";
import Resource from "./resource";
import {
  StatusCodes
} from 'http-status-codes';


export default interface Response {
  statusCode: StatusCodes,
  data?: Resource | Resource[],
  error?: WebAdapterError
}
