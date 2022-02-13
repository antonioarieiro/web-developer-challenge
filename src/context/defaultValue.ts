import Logo from '../images/logo.png'
import { Publication } from '../interfaces/Interfaces'


export const DEFAULT_LIST = [
  {
    id: 21,
    name: 'Antonio',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    photo: Logo,
  },
  {
    id: 54645,
    name: 'Antonio',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    photo: Logo,
  },
]

export const INITIAL_STATE: Publication = {
  id: 4554,
  name: '',
  description: '',
  photo: '',
};
