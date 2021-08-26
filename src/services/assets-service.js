import assets from "../data/assets";
import AbstractService from "./abstract-service";

export default class AssetsService extends AbstractService {}

AssetsService.prototype.getDefaultValues = () => assets;
AssetsService.prototype.serviceName = "AssetsService";
