export interface ICollaboratorTable {
    id: number;
    name: string;
    email: string;
    claims: string[];
    invited: boolean;
    joined: boolean;
    submited: boolean;
    costQuestions: boolean;
  }