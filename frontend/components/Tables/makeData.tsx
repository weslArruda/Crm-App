export type User = {
  id: string;
  name?: string;
  email: string
  salario?: string;
  cargo?: string;
  status?: string;
  supervisor: string;
  permissao: string;
  nascimento?: string;
  estado?: string;

};

  export const fakeData: User[] = [
    {
      id: '9s41rp',
      supervisor: 'Kelvin',
      permissao: 'Langosh',
      email: 'Jerod14@hotmail.com',
    },
    {
      id: '08m6rx',
      supervisor: 'Molly',
      permissao: 'Purdy',
      email: 'Hugh.Dach79@hotmail.com',
      estado: 'Rhode Island',
    },
    {
      id: '5ymtrc',
      supervisor: 'Henry',
      permissao: 'Lynch',
      email: 'Camden.Macejkovic@yahoo.com',
      estado: 'California',
    },
    {
      id: 'ek5b97',
      supervisor: 'Glenda',
      permissao: 'Douglas',
      email: 'Eric0@yahoo.com',
      estado: 'Montana',
    },
    {
      id: 'xxtydd',
      supervisor: 'Leone',
      permissao: 'Williamson',
      email: 'Ericka_Mueller52@yahoo.com',
      estado: 'Colorado',
    },
    {
      id: 'wzxj9m',
      supervisor: 'Mckenna',
      permissao: 'Friesen',
      email: 'Veda_Feeney@yahoo.com',
      estado: 'New York',
    },
    {
      id: '21dwtz',
      supervisor: 'Wyman',
      permissao: 'Jast',
      email: 'Melvin.Pacocha@yahoo.com',
      estado: 'Montana',
    },
    {
      id: 'o8oe4k',
      supervisor: 'Janick',
      permissao: 'Willms',
      email: 'Delfina12@gmail.com',
      estado: 'Nebraska',
    },
  ];

// const cargos = ['Vendedor', 'Supervisor', 'Ti', 'Gerente', 'Backoffice'];
// const nomes = fakeData.map(element => element.name);
//50 us estados array
export const usStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'Puerto Rico',
];
