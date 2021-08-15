import education from "../data/education";
import AbstractService from "./abstract-service";

export default class EducationService extends AbstractService {}

EducationService.prototype.getDefaultValues = () => education;
