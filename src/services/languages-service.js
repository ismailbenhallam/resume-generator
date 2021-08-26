import languages from "../data/languages";
import AbstractService from "./abstract-service";

export default class LanguagesService extends AbstractService {}

LanguagesService.prototype.getDefaultValues = () => languages;
LanguagesService.prototype.serviceName = "LanguagesService";
