import informations from "../data/informations";
import AbstractService from "./abstract-service";

export default class CoordinatesService extends AbstractService {}

CoordinatesService.prototype.getDefaultValues = () => informations;
CoordinatesService.prototype.serviceName = "CoordinatesService";
