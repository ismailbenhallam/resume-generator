import principalSkills from "../data/principal-skills";
import AbstractService from "./abstract-service";

export default class PrincipalSkillsService extends AbstractService {}

PrincipalSkillsService.prototype.getDefaultValues = () => principalSkills;
PrincipalSkillsService.prototype.serviceName = "PrincipalSkillsService";
