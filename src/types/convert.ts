import { WriteImageResponse } from "./writeImageResponse";
import { ToBase64Response } from "./toBase64Response";

export type Convert = {

  bulk?: (pages?: number | number[], toBase64?: boolean) => Promise<WriteImageResponse[] | ToBase64Response[]>;

  setOptions?: () => void;

  setGMClass?: (gmClass: string | boolean) => void;

   <B extends boolean = false>(page?: number, toBase64?: B):  B extends true ? Promise<ToBase64Response> : Promise<WriteImageResponse>;
}
