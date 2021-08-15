import experiences from "../data/experiences";
import AbstractService from "./abstract-service";

export default class ExperiencesService extends AbstractService {}

ExperiencesService.prototype.getDefaultValues = () => experiences;
