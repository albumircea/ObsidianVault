<%*
moment.locale("gb")
const thisDay = window.moment(tp.file.title, "YYYY-MM-DD");
const prevDay = thisDay.clone().subtract(1, 'days');
const nextDay = thisDay.clone().add(1, 'days');
const thisWeek = thisDay.format("YYYY-[W]WW");
const thisMonth = thisDay.format("YYYY-MM-[M]");
const thisQuarter = thisDay.format("YYYY-[Q]Q");
const thisYear = thisDay.format("YYYY-[Y]");
-%>
---
date: <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
creation date: <% tp.file.creation_date("dddd Do MMMM YYYY") %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY") %>
tags:
  - daily_note
weekly: <% thisWeek %>
monthly: <% thisMonth %>
quarterly: <% thisQuarter %>
yearly: <% thisYear %>
actual_RR: 0
potential_RR: 0
total_wins: 0
total_losses: 0
---
# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, DD MMMM YYYY") %>

 [[<% prevDay.format("YYYY-MM-DD") %> |⬅️ Prev Day]] | [[<% nextDay.format("YYYY-MM-DD") %> | Next Day ➡️]] [[<% thisWeek %> | This Week]]


> [!habits]+ Habits
> - [ ] read [minutes::0]
> - [ ] analysis
> - [ ] journal
> - [ ] backtesting [minutes::0]



# Trading
## London 
### Trade 1
#### Summary

#### Trade
|   HTF  |MTF|LTF-1|LTF-2
| --- | --- |--- | --- |
|  ![]() |  ![]()   | ![]() | ![]() |
| --- | --- |--- | --- |

## New-York
### Trade 1
