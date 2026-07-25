import { expect } from "jsr:@std/expect";
import * as eh from "#V2EH";

Deno.test("Creating 100000 Event", () => {
  for (let i = 0; i <= 100000; i++) {
    eh.CreateEvent(
      1,
      () => {
        console.log("bet");
      },
      i,
    );
  }
});
Deno.test("Trigger 100000 Event", () => {
  for (let i = 0; i <= 100000; i++) {
    eh.Trigger(0, i);
  }
});
Deno.test("Deleting 100000 Event", () => {
  for (let i = 0; i <= 100000; i++) {
    eh.RemoveEventID(i);
    eh.RemoveEventSlot(i);
  }
});

let depthG = 1000
let cnot = 0
let currDstr = []
Deno.test("100k Group Creation", (b) => {
  for (let i = 0; i < 100000; i++){
    if (cnot >= depthG) { currDstr = []; cnot = 0 }
    currDstr[(i % depthG)] = i
    eh.CreateEvent(4, () => { }, currDstr)
    cnot++;
  }
})
/*
cnot = 100
currDstr = []
Deno.test("100k Group Deletion", (b) => {
  for (let i = 100; i > 0; i--){
    if (cnot <= 0) { currDstr = []; cnot = i }
    currDstr[(i % depthG)] = i
    eh.RemoveEventID(...currDstr)
    cnot--;
  }
  console.log(eh.eventID)
})
*/
