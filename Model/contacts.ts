type picture = {
  large:string; 
  medium:string; 
  thumbnail:string;
};

type name ={
  title:string; 
  first:string; 
  last:string; 
}; 

type id ={
  name:string; 
  value:string; 
}; 

type login = {
    uuid: string; 
}; 
export interface Contacts {
    gender:string; 
    login: login; 
    name: name;
    location: TestLocationInfo; 
    id: id; 
    picture: picture;
    phone: string;
    cell: string; 
}