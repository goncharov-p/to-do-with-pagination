import React from "react";
class Todo {
    text:string;
    complete:boolean;
    constructor(textValue:string,completeValue:boolean){
        this.text=textValue;
        this.complete=completeValue;
    }
}
export {Todo};