import { expect } from "jsr:@std/expect";
import * as eh from "#V2EH";

Deno.test("Event Creation", () => {
  eh.CreateEvent(1, () => {}, "AAA");
  expect(eh.eventID).toMatchObject({ AAA: [0] });
});

Deno.test("Triggering", () => {
  eh.Trigger(-999, "AAA");
});

Deno.test("Removing EventID", () => {
  eh.RemoveEventID("AAA");

  expect(eh.eventID["AAA"]).toBeUndefined();
});

Deno.test("Removing EventSlot", () => {
  eh.RemoveEventSlot(0);
  expect(eh.eventData[0]).toBeUndefined();
});

Deno.test("Remove Slot from EventID", () => {
  eh.CreateEvent(1, () => { console.log("AF") }, "B4")
  eh.CreateEvent(1, () => { console.log("AFFF") }, "B4")

  eh.RemoveEventID("B4",1)
  eh.RemoveEventSlot(4)
  expect(eh.eventID["B4"]).toMatchObject([0])
})

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
  eh.RemoveEventID(indx);
  eh.RemoveEventSlot(indx);
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

Deno.test("Creating EventGroup", () => {
  eh.CreateEvent(4, () => {}, "CB_test");
  expect(eh.eventID["CB_test"]).toMatchObject({ $__Metadata__: ["__self__"], __self__: [3] });
});

Deno.test("Adding Event to CB_test", () => {
  eh.CreateEvent(
    1,
    () => {
      console.log("HELLO!AAA");
    },
    "CB_test",
    "CD",
  );
  eh.CreateEvent(
    1,
    () => {
      console.log("HELLO!");
    },
    "CB_test",
    "ABB",
  );
  expect(eh.eventID["CB_test"]["CD"] instanceof Array).toBe(true);
});

Deno.test("Triggering CD in CB_test", () => {
  eh.Trigger(1, "CB_test", "CD");
});

Deno.test("Triggering CB_test", () => {
  eh.Trigger(1, "CB_test");
});
Deno.test("Grouping CD to CB_test", () => {
  eh.CreateEvent(4, () => {}, "CB_test", "JD");

  eh.CreateEvent(
    1,
    () => {
      console.log("111111");
    },
    "CB_test",
    "JD",
    "Joe",
  );
  eh.Trigger(1, "CB_test", "CD", "Joe");
});

Deno.test("Triggering CB_test Group", () => {
  eh.Trigger(1, "CB_test");
});
