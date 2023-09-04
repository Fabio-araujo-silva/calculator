import { selectOperation } from "./selectOperation.js";

export function startCalc() {
    while(selectOperation());
    return;
}