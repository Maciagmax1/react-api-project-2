export interface TrailerList {
  key: string;
  type: string;
}

export default interface SingleTrailerResponse {
  results: TrailerList[];
}
