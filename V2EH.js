let eventID = { count: 0 };

let eventData = [];
const freelistslot = [];
let eventDCount = 0;

const specialList = {
  // no use yet
  SET: [{ name: "Metadata", isheader: true }, "#__Preprocess__", "#__Unhandle__"],
  SST: [
    {},
    (str) => {
      return `#__^${str}^T`;
    },
  ],
};
const eventType = {
  1: {
    name: "EventListner",
    handler: function (state, myEventID, myEventSlot, ...args) {
      if (state === 5) return;
      if (state === -1) return;
      else if (state === 0) return;
      return this.fn(args);
    },
    RE_fn: RE_Default,
    GR_fn: function () {},
  },
  2: { name: "EventCaster" },
  3: { name: "EventTimer" },
  4: {
    name: "EventGroup",
    handler: function (state, myEventID, myEventSlot, ...args) {
      if (state === 0) {
        let b = [...args];
        b.pop();
        getByPath(eventID, b)[args[args.length - 1]] = {
          $__Metadata__: ["__self__"],
          __self__: myEventID,
        };
      }
      if (state === 1) {
        const C = [...args];
        const K = getByPath(eventID, C.slice(C.length - 1))[args[args.length - 1]];
        for (const i in K) {
          if (!(i == "$__Metadata__" || i == K.$__Metadata__[0])) {
            C.push(i);
            Trigger(1, C);
            C.pop();
          }
        }
      }
    },
    RE_fn: RE_Default,
    GR_fn: function () {},
  },
};
let defaultID = "host";

function RE_Default(EventSlot, ...args) {
  const tmp = [...args];
  tmp.pop();
  const TR = getByPath(eventID, tmp);
  if (TR[args[args.length - 1]] == null) return (TR[args[args.length - 1]] = [EventSlot]);
  else if (TR[args[args.length - 1]] instanceof Array)
    return TR[args[args.length - 1]].push(EventSlot);
  else if (TR instanceof Object) return (TR[args[args.length - 1]] = [EventSlot]);
}

function getByPath(arr, path) {
  if (path == null) return arr;
  if (path.length === 0 || path[0] == null) {
    return arr;
  }
  return getByPath(arr[path[0]], path.slice(1));
}

function RegisterEvent(EventSlot, RE_fn, ...args) {
  return RE_fn.call({ eventID, eventData }, EventSlot, ...args);
}

function CreateEventSlot(name, custom_ID, data, ...args) {
  let ChannelSlotID = custom_ID;
  const dataslot = {
    name: name,
    data: data,
  };
  if (ChannelSlotID != null) {
    if (eventData[ChannelSlotID] != null) return ChannelSlotID;
    eventData[ChannelSlotID] = dataslot;
    if (ChannelSlotID >= eventDCount) eventDCount = ChannelSlotID + 1;
    return ChannelSlotID;
  } else {
    if (freelistslot[0] != null) {
      let num = freelistslot[0];
      eventData[num] = dataslot;
      freelistslot.shift();
      return num;
    } else {
      eventData[eventDCount] = dataslot;
      return eventDCount++;
    }
  }
}

function CreateEvent(type, fn, ...args) {
  let slotid = null;
  const data = {};
  data.emun = {};
  data.emun.type = {
    general: 0x02,
    typedef: 0x04,
  };
  data.flagType = {
    validated1: 0b01000000,
  };
  data.flag = 0b00000000;
  data.state = 0;
  for (let para of args) {
    if (typeof para === "object") {
      if (para.slot != null) {
        slotid = para.slot
    };
    }
  }
  const tmp = Object.create(eventType[type]);
  tmp.fn = fn;
  tmp.state = data.state;
  data.eventID = RegisterEvent(CreateEventSlot(null, slotid, { Event: tmp }), tmp.RE_fn, ...args);
  tmp.ID = [...args]
  tmp.eventRID = eventID[args[args.length - 1]];
  tmp.eventSlot = eventData[tmp.eventRID];
  Trigger(0, ...args);
  return data;
}

function RemoveEventSlot(Slot,cleanupleak = true) {
  if (eventData[Slot] == null) return undefined
  const d = eventData[Slot].data.Event;
  d.handler(-1);

  if (cleanupleak) {
    const L = getByPath(eventID, d.ID.length <= 1 ? null : d.ID.slice(0, d.ID.length - 1))[d.ID[d.ID.length - 1 ]]
    if (L != null)
      L.splice(L.indexOf(Slot),1)
  }
  eventData[Slot] = undefined;
  delete eventData[Slot];
  freelistslot[freelistslot.length] = Slot;
}

function RemoveEventID(...EventID) {
  let obj = getByPath(eventID, EventID.length <= 1 ? null : EventID.slice(0, EventID.length - 1));
  if ((typeof EventID[EventID.length - 1] == "number") && (obj instanceof Array)) {
    obj.splice(obj.indexOf(EventID[EventID.length - 1]),1)
  }
    else
    delete obj[EventID[EventID.length - 1]];
}
function Trigger(state, ...args) {
  if (args.length == 1 && args[0] instanceof Array) args = args[0];
  const LocalEventID = [...args][args.length - 1];
  const tmp = [...args];
  tmp.pop();
  const atmp = getByPath(eventID, tmp)[LocalEventID];
  if (tmp == null) return undefined;
  const test = [];
  if (atmp instanceof Array) {
    let hand = null;
    for (const i of atmp) {
      hand = eventData[i];
      if (hand == null) continue;
      hand.data.Event.state = state;
      test[i] = hand.data.Event.handler.call(
        { fn: hand.data.Event.fn },
        hand.data.Event.state,
        atmp,
        eventData[i],
        ...args,
      );
    }
  } else if (atmp instanceof Object) {
    let hand = null;
    if (atmp.$__Metadata__ == null) return undefined;
    const K = atmp.$__Metadata__[0];
    for (const i of atmp[K]) {
      hand = eventData[i];
      hand.data.Event.state = state;
      test[i] = hand.data.Event.handler.call(
        { fn: hand.data.Event.fn },
        hand.data.Event.state,
        atmp,
        eventData[i],
        ...args,
      );
    }
  }
  return test;
}

export {
  CreateEvent,
  CreateEventSlot,
  eventID,
  eventData,
  Trigger,
  RemoveEventSlot,
  RemoveEventID,
};
