# OverDaming
Notably nothing special to say
just a lightweight compact local WIP Event System

# !!Warning!!

It's incomplete with feature and railguard not finished yet.
Typescript Defintion will not coming soon, my main project is not finished yet.

And no, I will not accept any kind of contribution or dontation 
## Installation
- Clone/download from GitHub
- `import * as eh from "./V2EH.js"`
### Example:

``` Javascript
import * as eh from "./V2EH.js"

eh.CreateEvent(1, () => console.log("fired"), "myEvent");
eh.Trigger(0, "myEvent");

//Deleting Event:
eh.RemoveEventID("myEvent");
eh.RemoveEventSlot(0);
```
Yes I know it's confusing but it for flexibility


## Available Event:

 1: EventListener


## States
   - 0: Initialization (reserved)
   - 1-999: Custom (handler-defined)
   - 5: Finished/End
   - 6: Frozen/Pause (reserved)
   - -1: Cleanup/Deleted (reserved)

## Interface/Function call:

#### CreateEvent(Predefine_EventType,Function_Callback, ...EventID/ObjectData(Future Plan))

Data Behavior: Coming soon... idk, maybe several weeks? or month?


Desc:
  Automatically group data and call RegisterEvent & CreateEventSlot

  [TL:DR]: organizer event setup

#### Trigger(Event_State, ...EventID)

Data Behavior: Coming not soon


Desc:
  Trigger Event, idk what to say here


#### RemoveEventID(...EventID) / RemoveEventSlot(ChannelSlot)

Data Behavior:  Not coming :D


Desc:
  Intended for remove specific element



## License
See LICENSE file. TL;DR: Credit me, use at your own risk, no responsibility for forks.

### benckmarks slop(v0.0.93):

❯ deno test ./public/iPlugins/V2EH_test.js
running 11 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (101µs)
Multi Event creation(TEMPORARY!!!) ... ok (224µs)
trigger MEC ... ok (70µs)
Removing EventID ... ok (245µs)
Removing EventSlot ... ok (114µs)
Removing Multi EventID ... ok (101µs)
Creating 100000 Event ... ok (137ms)
Trigger 100000 Event ... ok (44ms)
Deleting 100000 Event ... ok (84ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (829µs)

ok | 11 passed | 0 failed (278ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 11 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (94µs)
Multi Event creation(TEMPORARY!!!) ... ok (179µs)
trigger MEC ... ok (85µs)
Removing EventID ... ok (284µs)
Removing EventSlot ... ok (105µs)
Removing Multi EventID ... ok (77µs)
Creating 100000 Event ... ok (135ms)
Trigger 100000 Event ... ok (43ms)
Deleting 100000 Event ... ok (88ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (722µs)

ok | 11 passed | 0 failed (277ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 11 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (217µs)
Multi Event creation(TEMPORARY!!!) ... ok (225µs)
trigger MEC ... ok (88µs)
Removing EventID ... ok (355µs)
Removing EventSlot ... ok (117µs)
Removing Multi EventID ... ok (94µs)
Creating 100000 Event ... ok (150ms)
Trigger 100000 Event ... ok (49ms)
Deleting 100000 Event ... ok (90ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (770µs)

ok | 11 passed | 0 failed (302ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 11 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (143µs)
Multi Event creation(TEMPORARY!!!) ... ok (201µs)
trigger MEC ... ok (78µs)
Removing EventID ... ok (259µs)
Removing EventSlot ... ok (168µs)
Removing Multi EventID ... ok (139µs)
Creating 100000 Event ... ok (139ms)
Trigger 100000 Event ... ok (48ms)
Deleting 100000 Event ... ok (84ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (741µs)

ok | 11 passed | 0 failed (283ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 11 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (95µs)
Multi Event creation(TEMPORARY!!!) ... ok (266µs)
trigger MEC ... ok (65µs)
Removing EventID ... ok (282µs)
Removing EventSlot ... ok (146µs)
Removing Multi EventID ... ok (96µs)
Creating 100000 Event ... ok (139ms)
Trigger 100000 Event ... ok (44ms)
Deleting 100000 Event ... ok (86ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (843µs)

ok | 11 passed | 0 failed (281ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 11 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (134µs)
Multi Event creation(TEMPORARY!!!) ... ok (194µs)
trigger MEC ... ok (79µs)
Removing EventID ... ok (264µs)
Removing EventSlot ... ok (134µs)
Removing Multi EventID ... ok (127µs)
Creating 100000 Event ... ok (134ms)
Trigger 100000 Event ... ok (45ms)
Deleting 100000 Event ... ok (85ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (777µs)

ok | 11 passed | 0 failed (275ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 11 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (129µs)
Multi Event creation(TEMPORARY!!!) ... ok (223µs)
trigger MEC ... ok (105µs)
Removing EventID ... ok (279µs)
Removing EventSlot ... ok (140µs)
Removing Multi EventID ... ok (109µs)
Creating 100000 Event ... ok (135ms)
Trigger 100000 Event ... ok (43ms)
Deleting 100000 Event ... ok (86ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (655µs)

ok | 11 passed | 0 failed (275ms)

❯ deno bench ./public/iPlugins/V2EH_test.js
    CPU | Intel(R) Xeon(R) CPU E3-1220 v3 @ 3.10GHz
Runtime | Deno 2.9.1 (x86_64-unknown-linux-gnu)

file:///home/ash/Documents/project/web/cols/public/iPlugins/V2EH_test.js

| benchmark          | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| ------------------ | --------------- | ------------- | --------------------- | -------- | -------- | -------- |
| Creating Event     |          1.2 µs |       834,400 | (700.8 ns …   2.7 µs) |   1.5 µs |   2.7 µs |   2.7 µs |
| Triggering Event   |        115.4 ns |     8,667,000 | (101.7 ns …   1.5 µs) | 113.0 ns | 144.3 ns | 153.5 ns |
| Deleting Event     |        931.0 ns |     1,074,000 | (320.0 ns … 102.1 ms) | 371.0 ns | 744.0 ns | 907.0 ns |

❯ deno bench ./public/iPlugins/V2EH_test.js
    CPU | Intel(R) Xeon(R) CPU E3-1220 v3 @ 3.10GHz
Runtime | Deno 2.9.1 (x86_64-unknown-linux-gnu)

file:///home/ash/Documents/project/web/cols/public/iPlugins/V2EH_test.js

| benchmark          | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| ------------------ | --------------- | ------------- | --------------------- | -------- | -------- | -------- |
| Creating Event     |          1.1 µs |       887,000 | (717.2 ns …   2.1 µs) |   1.4 µs |   2.1 µs |   2.1 µs |
| Triggering Event   |        112.5 ns |     8,885,000 | (101.8 ns … 908.5 ns) | 113.7 ns | 142.3 ns | 155.1 ns |
| Deleting Event     |        812.8 µs |         1,230 | (585.4 µs …  58.8 ms) | 649.5 µs |   1.5 ms |   6.0 ms |

❯ deno bench ./public/iPlugins/V2EH_test.js
    CPU | Intel(R) Xeon(R) CPU E3-1220 v3 @ 3.10GHz
Runtime | Deno 2.9.1 (x86_64-unknown-linux-gnu)

file:///home/ash/Documents/project/web/cols/public/iPlugins/V2EH_test.js

| benchmark          | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| ------------------ | --------------- | ------------- | --------------------- | -------- | -------- | -------- |
| Creating Event     |          1.1 µs |       916,900 | (741.4 ns …   2.1 µs) |   1.4 µs |   2.1 µs |   2.1 µs |
| Triggering Event   |        110.6 ns |     9,043,000 | (101.3 ns … 424.4 ns) | 113.4 ns | 138.7 ns | 143.1 ns |
| Deleting Event     |        546.0 ns |     1,832,000 | (255.0 ns …  61.0 ms) | 349.0 ns | 569.0 ns | 686.0 ns |

#### Disclaimer: Deno Bench is kinda unrelated so trust the deno test instead
