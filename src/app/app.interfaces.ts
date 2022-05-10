import { SafeHtml } from '@angular/platform-browser';

export type Tier = 'S' | 'A' | 'B' | 'C' | 'D';
export interface RecordCard {
  picture: string;
  name: string;
  description: string;
  tier: Tier;
}

export type RecordCardOrganizer = {
  tier: Tier;
  data: Omit<RecordCard, 'tier'>[];
};

export type RecordDetail = {
  picture: string;
  name: string;
  tabs: string[];
  buttons: ButtonConfig[];
  chartInputs: any;
  metrics: Metric[];
  description: RecordDetailDescription[];
  cards: RecordDetailCard[];
};

export type ProcessedRecordDetail = {
  picture: string;
  name: string;
  tabs: string[];
  buttons: (ButtonConfig & ButtonState)[];
  chartInputs: any;
  metrics: Metric[];
  description: RecordDetailDescription[];
  cards: RecordDetailCard[];
};

export type basicfunction = () => any;

export type RecordDetailCard = {
  picture: string | any;
  name: string;
  description: string;
  action: basicfunction;
};

/** could evolve */
export type RecordDetailDescription = {
  data: string;
};

export interface ButtonAreaConfig {
  buttons: (Partial<ButtonConfig> & ButtonState)[];
}

export type DetailTab = {
  id: string;
  data: string[];
};

export type Metric = {
  key: string;
  val: string | number;
};

export interface ButtonConfig {
  id: string;
  name: string;
  svgHTML?: SafeHtml;
  fileConfig?: {
    urlPath: string;
    options: any; // check the http options type
  };
  fn?: Function;
}

export interface ButtonState {
  isLoading: boolean;
}
