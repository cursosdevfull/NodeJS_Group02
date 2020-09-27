export interface genericDatabase {
  initialize: () => Promise<any>;
  closeConnection: () => void;
}
