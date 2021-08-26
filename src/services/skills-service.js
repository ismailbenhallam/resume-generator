import skills from "../data/skills";
import AbstractService from "./abstract-service";

export default class SkillsService extends AbstractService {}

SkillsService.prototype.getDefaultValues = () => skills;
SkillsService.prototype.serviceName = "SkillsService";
