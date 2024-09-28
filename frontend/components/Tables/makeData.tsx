export type User = {
  id: string;
  nome?: string;
  username: string;
  senha: string;
  email: string;
  nascimento?: string;
  cargo?: string;
  supervisor?: string;
  permissao?: string;
  status?: string;
  criatedAt?: string;
};

export const cargos = ['Vendedor', 'Supervisor', 'Ti', 'Gerente', 'Backoffice'];
export const status = ['Ativo', 'Inativo']
export const supervisores = ['Super1', 'Super2']
export const permissoes = ['Operador', 'Backoffice', 'Supervisor', 'Desenvolvedor', 'RH', 'Planejamento']