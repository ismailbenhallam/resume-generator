import interests from "../data/interests";
import AbstractService from "./abstract-service";

export default class InterestsService extends AbstractService {}

InterestsService.prototype.getDefaultValues = () => interests;
InterestsService.prototype.serviceName = "InterestsService";
