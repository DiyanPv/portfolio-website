import { ChangeEvent, MouseEventHandler } from "react";
export interface ITechnologiesCard {
  image: string;
  key: string;
  setisNameShown: React.Dispatch<boolean>;
  isNameShown: boolean;
  name:string;

}
