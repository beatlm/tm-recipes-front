import { EmbeddedList } from './EmbeddedList';

  export interface ResponseModel <T>{
   _embedded: EmbeddedList<T>;
   _links: any;
   page: any;
 }