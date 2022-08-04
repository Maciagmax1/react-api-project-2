export interface Certification {
  certification: string;
}

export interface CertificationList {
  iso_3166_1: string;
  release_dates: Certification[];
}

export default interface SingleCertificationResponse {
  results: CertificationList[];
}
