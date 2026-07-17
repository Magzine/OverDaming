import { expect } from "jsr:@std/expect";
import * as eh from "#V2EH";

Deno.test("Event Creation", () => {
  eh.CreateEvent(1, () => {}, "AAA");
  expect(eh.eventID).toMatchObject({ AAA: [0] });
});

Deno.test("Triggering", () => {
  eh.Trigger(-999, "AAA");
});
Deno.test("Multi Event creation(TEMPORARY!!!)", () => {
  eh.eventID[2] = { A: [] };
  eh.CreateEvent(1, () => {}, 2, "A");

  expect(eh.eventID).toMatchObject({ 2: { A: [1] } });
});

Deno.test("trigger MEC", () => {
  eh.Trigger(0, 2);
});

Deno.test("Removing EventID", () => {
  eh.RemoveEventID("AAA");

  expect(eh.eventID["AAA"]).toBeUndefined();
});

Deno.test("Removing EventSlot", () => {
  eh.RemoveEventSlot(0);
  expect(eh.eventData[0]).toBeUndefined();
});

Deno.test("Removing Multi EventID", () => {
  eh.RemoveEventID("2", "A");

  expect(eh.eventID["2"]["A"]).toBeUndefined();
});
const mul = 1;
let cout = 0;
Deno.bench(`Creating Event`, (b) => {
  eh.CreateEvent(
    1,
    () => {
      console.log("bet");
    },
    cout,
  );
  cout++;
});
let bk = 0;
Deno.bench("Triggering Event", () => {
  eh.Trigger(bk);
  bk++;
});
let indx = 0;
Deno.bench("Deleting Event", (b) => {
  b.start();
  eh.RemoveEventID(indx);
  eh.RemoveEventSlot(indx);
  b.end();
  indx++;
});

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

Deno.test("Single Multi Event", () => {
  eh.CreateEvent(
    1,
    () => {
      console.log("AD");
      return 994;
    },
    "A",
  );
  const data = eh.CreateEvent(
    1,
    () => {
      console.log("B1");
    },
    "A",
  );
  eh.CreateEvent(
    1,
    () => {
      console.log("C9");
    },
    "A",
  );
  eh.Trigger(1, "A");
});
