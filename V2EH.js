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
    handler: function (state, ...args) {
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
    handler: function (state, ...args) {
      if (state === 0) {
        this.eventRID = {
          $__Metadata__: [],
          __self__: this.eventSlot,
        };
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

function deleteFromObject(keyPart, obj) {
  for (var k in obj) {
    if (keyPart != null ? keyPart[0] === "*" : false) {
      if (keyPart.length > 1)
        if (~k.indexOf(keyPart.substring(1)) === 0) {
          delete obj[k];
        } else if (~k.indexOf(keyPart)) delete obj[k];
    } else if (~k.indexOf(keyPart)) delete obj[k];
  }
}

function getByPath(arr, path) {
  if (path == null) return null;
  if (path.length === 0) {
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
      if (para.slot != null) slotid = para.slot;
    }
  }
  const tmp = Object.create(eventType[type]);
  tmp.fn = fn;
  tmp.state = data.state;
  data.eventID = RegisterEvent(CreateEventSlot(null, slotid, { Event: tmp }), tmp.RE_fn, ...args);
  tmp.eventRID = eventID[args[args.length - 1]];
  tmp.eventSlot = eventData[tmp.eventRID];
  Trigger(0, ...args);
  return data;
}

function RemoveEventSlot(Slot) {
  if (eventData[Slot] == null) return undefined;
  eventData[Slot].data.Event.handler(-1);
  eventData[Slot] = undefined;
  delete eventData[Slot];
  freelistslot[freelistslot.length] = Slot;
}

function RemoveEventID(...EventID) {
  const key = EventID.pop();
  deleteFromObject(key, getByPath(eventID, EventID));
}

function Trigger(state, ...args) {
  const LocalEventID = [...args][args.length - 1];
  let tmp = args;
  tmp.pop();
  tmp = getByPath(eventID, tmp)[LocalEventID];
  if (tmp == null) return null;
  let test = [];
  if (tmp instanceof Array) {
    let hand = null;
    for (const i of tmp) {
      hand = eventData[i];
      hand.data.Event.state = state;
      test[i] = hand.data.Event.handler.call(
        {
          fn: hand.data.Event.fn,
          eventRID: hand.data.Event.eventRID,
          slot: hand.data.Event.eventSlot,
          state: hand.data.Event.state,
        },
        hand.data.Event.state,
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
