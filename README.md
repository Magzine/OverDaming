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


## Benchmarks Slop(v0.00.84.9):

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (161µs)
Removing EventID ... ok (280µs)
Removing EventSlot ... ok (125µs)
Creating 100000 Event ... ok (141ms)
Trigger 100000 Event ... ok (50ms)
Deleting 100000 Event ... ok (20ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (903µs)
Creating EventGroup ... ok (696µs)
Adding Event to CB_test ... ok (429µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (101µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (132µs)
Grouping CD to CB_test ... ok (175µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (121µs)

ok | 14 passed | 0 failed (224ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (120µs)
Removing EventID ... ok (206µs)
Removing EventSlot ... ok (115µs)
Creating 100000 Event ... ok (138ms)
Trigger 100000 Event ... ok (48ms)
Deleting 100000 Event ... ok (22ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (871µs)
Creating EventGroup ... ok (474µs)
Adding Event to CB_test ... ok (286µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (88µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (142µs)
Grouping CD to CB_test ... ok (158µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (134µs)

ok | 14 passed | 0 failed (222ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (105µs)
Removing EventID ... ok (214µs)
Removing EventSlot ... ok (151µs)
Creating 100000 Event ... ok (141ms)
Trigger 100000 Event ... ok (49ms)
Deleting 100000 Event ... ok (20ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (1ms)
Creating EventGroup ... ok (503µs)
Adding Event to CB_test ... ok (274µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (108µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (131µs)
Grouping CD to CB_test ... ok (186µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (154µs)

ok | 14 passed | 0 failed (224ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (111µs)
Removing EventID ... ok (223µs)
Removing EventSlot ... ok (120µs)
Creating 100000 Event ... ok (142ms)
Trigger 100000 Event ... ok (49ms)
Deleting 100000 Event ... ok (21ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (806µs)
Creating EventGroup ... ok (394µs)
Adding Event to CB_test ... ok (318µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (136µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (249µs)
Grouping CD to CB_test ... ok (151µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (172µs)

ok | 14 passed | 0 failed (224ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (91µs)
Removing EventID ... ok (213µs)
Removing EventSlot ... ok (104µs)
Creating 100000 Event ... ok (142ms)
Trigger 100000 Event ... ok (50ms)
Deleting 100000 Event ... ok (21ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (846µs)
Creating EventGroup ... ok (453µs)
Adding Event to CB_test ... ok (233µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (117µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (126µs)
Grouping CD to CB_test ... ok (148µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (120µs)

ok | 14 passed | 0 failed (225ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (85µs)
Removing EventID ... ok (181µs)
Removing EventSlot ... ok (94µs)
Creating 100000 Event ... ok (144ms)
Trigger 100000 Event ... ok (67ms)
Deleting 100000 Event ... ok (26ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (1ms)
Creating EventGroup ... ok (419µs)
Adding Event to CB_test ... ok (216µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (88µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (187µs)
Grouping CD to CB_test ... ok (162µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (151µs)

ok | 14 passed | 0 failed (250ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (105µs)
Removing EventID ... ok (217µs)
Removing EventSlot ... ok (109µs)
Creating 100000 Event ... ok (141ms)
Trigger 100000 Event ... ok (48ms)
Deleting 100000 Event ... ok (20ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (793µs)
Creating EventGroup ... ok (387µs)
Adding Event to CB_test ... ok (345µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (81µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (114µs)
Grouping CD to CB_test ... ok (170µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (122µs)

ok | 14 passed | 0 failed (222ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (98µs)
Removing EventID ... ok (225µs)
Removing EventSlot ... ok (104µs)
Creating 100000 Event ... ok (138ms)
Trigger 100000 Event ... ok (48ms)
Deleting 100000 Event ... ok (21ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (784µs)
Creating EventGroup ... ok (394µs)
Adding Event to CB_test ... ok (202µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (85µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (156µs)
Grouping CD to CB_test ... ok (152µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (198µs)

ok | 14 passed | 0 failed (218ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (112µs)
Removing EventID ... ok (210µs)
Removing EventSlot ... ok (129µs)
Creating 100000 Event ... ok (147ms)
Trigger 100000 Event ... ok (49ms)
Deleting 100000 Event ... ok (20ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (826µs)
Creating EventGroup ... ok (452µs)
Adding Event to CB_test ... ok (326µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (130µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (169µs)
Grouping CD to CB_test ... ok (173µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (146µs)

ok | 14 passed | 0 failed (230ms)

❯ deno test ./public/iPlugins/V2EH_test.js
running 14 tests from ./public/iPlugins/V2EH_test.js
Event Creation ... ok (1ms)
Triggering ... ok (106µs)
Removing EventID ... ok (202µs)
Removing EventSlot ... ok (111µs)
Creating 100000 Event ... ok (141ms)
Trigger 100000 Event ... ok (50ms)
Deleting 100000 Event ... ok (22ms)
Single Multi Event ...
------- output -------
AD
B1
C9
----- output end -----
Single Multi Event ... ok (750µs)
Creating EventGroup ... ok (436µs)
Adding Event to CB_test ... ok (262µs)
Triggering CD in CB_test ...
------- output -------
HELLO!AAA
----- output end -----
Triggering CD in CB_test ... ok (213µs)
Triggering CB_test ...
------- output -------
HELLO!AAA
HELLO!
----- output end -----
Triggering CB_test ... ok (144µs)
Grouping CD to CB_test ... ok (156µs)
Triggering CB_test Group ...
------- output -------
HELLO!AAA
HELLO!
111111
----- output end -----
Triggering CB_test Group ... ok (132µs)

ok | 14 passed | 0 failed (226ms)

❯ deno bench ./public/iPlugins/V2EH_test.js
    CPU | Intel(R) Xeon(R) CPU E3-1220 v3 @ 3.10GHz
Runtime | Deno 2.9.1 (x86_64-unknown-linux-gnu)

file:///home/ash/Documents/project/web/cols/public/iPlugins/V2EH_test.js

| benchmark          | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| ------------------ | --------------- | ------------- | --------------------- | -------- | -------- | -------- |
| Creating Event     |          1.1 µs |       897,800 | (749.1 ns …   2.5 µs) |   1.4 µs |   2.5 µs |   2.5 µs |
| Triggering Event   |        137.7 ns |     7,264,000 | (126.0 ns … 442.5 ns) | 140.8 ns | 178.5 ns | 189.3 ns |
| Deleting Event     |        132.6 ns |     7,544,000 | (104.1 ns … 637.2 ns) | 122.3 ns | 428.1 ns | 569.7 ns |

❯ deno bench ./public/iPlugins/V2EH_test.js
    CPU | Intel(R) Xeon(R) CPU E3-1220 v3 @ 3.10GHz
Runtime | Deno 2.9.1 (x86_64-unknown-linux-gnu)

file:///home/ash/Documents/project/web/cols/public/iPlugins/V2EH_test.js

| benchmark          | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| ------------------ | --------------- | ------------- | --------------------- | -------- | -------- | -------- |
| Creating Event     |          1.1 µs |       875,900 | (755.4 ns …   2.0 µs) |   1.4 µs |   2.0 µs |   2.0 µs |
| Triggering Event   |        136.4 ns |     7,332,000 | (122.6 ns … 656.4 ns) | 138.1 ns | 224.3 ns | 264.9 ns |
| Deleting Event     |        130.5 ns |     7,665,000 | (108.5 ns … 479.9 ns) | 128.0 ns | 368.0 ns | 455.5 ns |

❯ deno bench ./public/iPlugins/V2EH_test.js
    CPU | Intel(R) Xeon(R) CPU E3-1220 v3 @ 3.10GHz
Runtime | Deno 2.9.1 (x86_64-unknown-linux-gnu)

file:///home/ash/Documents/project/web/cols/public/iPlugins/V2EH_test.js

| benchmark          | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| ------------------ | --------------- | ------------- | --------------------- | -------- | -------- | -------- |
| Creating Event     |          1.3 µs |       780,600 | (831.0 ns …   2.4 µs) |   1.7 µs |   2.4 µs |   2.4 µs |
| Triggering Event   |        139.8 ns |     7,155,000 | (125.8 ns … 732.8 ns) | 141.1 ns | 182.1 ns | 225.4 ns |
| Deleting Event     |        129.4 ns |     7,726,000 | (107.0 ns … 480.5 ns) | 124.0 ns | 373.7 ns | 424.8 ns |


####Spec:
CPU: Intel Xeon E3-1220 v3
Ram: DDR3 1600mhz Single-Channel zram compressed & swap
Storage: 256 GB HDD 128 mb/s W/O

#### Disclaimer: Deno Bench is kinda unrelated so trust the deno test instead
