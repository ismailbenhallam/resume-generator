import certifications from "../data/certifications";
import AbstractService from "./abstract-service";

export default class CertificationsService extends AbstractService {}

CertificationsService.prototype.getDefaultValues = () => certifications;
CertificationsService.prototype.serviceName = "CertificationsService";
