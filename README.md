# OverDaming
Notably nothing special to say
just a lightweight compact local WIP Event System

# !!Warning!!

It's incomplete with feature and railguard not finished yet
Typescript Defintion will not coming soon, my main project is not finished yet

## Usage:

- Download V2EH.js
- Import it as namesace(i.e Import * as eh from "./V2EH.js")
- new whatever name for the class

### Example:

Import * as eh from "./V2EH.js"

eh.CreateEvent(1, () => console.log("fired"), "myEvent");
eh.Trigger(0, "myEvent");

## Interface/Function call/Exposed Internal:

### CreateEvent(Predefine_EventType,Function_Callback, EventID/ObjectData(Future Plan))


## License
See LICENSE file. TL;DR: Credit me, use at your own risk, no responsibility for forks.
