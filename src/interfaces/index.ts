export interface ISurvey {
  title: string;
  description: string;
  is_published?: boolean;
}

export interface IQuestion {
  title: string;
  survey: string;
}

export interface IOption {
  title: string;
  question: string;
}