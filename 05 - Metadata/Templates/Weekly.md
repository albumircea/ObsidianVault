<%*
moment.locale("ro")
const thisWeek = window.moment(tp.file.title, "YYYY-[W]WW");
const previousWeek = thisWeek.clone().subtract(1, 'weeks');
const nextWeek = thisWeek.clone().add(1, 'weeks');
const thisMonth = thisWeek.format("YYYY-MM");
const thisQuarter = thisWeek.format("YYYY-[Q]Q");
const thisYear = thisWeek.format("YYYY-[Y]");
const startOfWeek = thisWeek.startOf('week').format("DD MMMM YYYY"); 
const endOfWeek = thisWeek.endOf('week').format("DD MMMM YYYY");
const formattedPeriod = `${startOfWeek} - ${endOfWeek}`;
-%>---
date: <% thisWeek.startOf('week').format("YYYY-MM-DD") %>
creation date: <% tp.file.creation_date("dddd Do MMMM YYYY") %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY") %>
tags:
  - weekly_note
monthly: <% thisMonth %>
quarterly: <% thisQuarter %>
yearly: <% thisYear %>
aliases:
---
# <% formattedPeriod %>

[[<% previousWeek.format("YYYY-MM-[W]ww") %> |⬅️ Prev Week]] | [[<% nextWeek.format("YYYY-MM-[W]ww") %> | Next Week ➡️]] 
[[<% thisMonth %> | This Month]]


```dataview
Table without id ("[["+file.name+"]]") as "Daily Summaries", actual_RR, potential_RR, trade_highlight as "Trade Highlights"
FROM "04 - Journaling/01-Daily"
WHERE weekly = this.file.name
SORT file.name ASC
```




## End of week summary
- 

**Summarised summary**
- 

