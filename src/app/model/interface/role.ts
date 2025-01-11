import exp from "constants";

export interface IRole {
     roleId : number;
     role : string;
}

export interface APIResponseModel {
    message : string,
    result : boolean,
    data : any;
}

export interface IDesignation {
    designationId : number;
    designation : string;
}

export interface Employee {
    empName: string
    empId: number
    empCode: string
    empEmailId: string
    empDesignation: string
    role: string
  }
  