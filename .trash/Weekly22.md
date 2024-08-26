---
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
tags:
  - weekly_note
---

# <% tp.file.title %>

"Previous Week - Next Week" Internal Links
<< [[<%fileDate = moment(tp.file.title, 'gggg-[W]ww').subtract(1, 'weeks').format('gggg-[W]ww')%>|Previous Week]] | [[<%fileDate = moment(tp.file.title, 'gggg-[W]ww').add(1, 'weeks').format('gggg-[W]ww')%>|Next Week]] >>

"Days of the Week" Callout
> [!weekly]- Days of the Week
> [[<%tp.date.now("YYYY-MM-DD", -6)%>|Monday]]
> [[<%tp.date.now("YYYY-MM-DD", -5)%>|Tuesday]]
> [[<%tp.date.now("YYYY-MM-DD", -4)%>|Wednesday]]
> [[<%tp.date.now("YYYY-MM-DD", -3)%>|Thursday]]
> [[<%tp.date.now("YYYY-MM-DD", -2)%>|Friday]]
> [[<%tp.date.now("YYYY-MM-DD", -1)%>|Saturday]]
> [[<%tp.date.now("YYYY-MM-DD")%>|Sunday]]



## asdasd

<%*
moment.locale("gb")
const thisWeek = window.moment(tp.file.title, "YYYY-&&-&W WW");
const previousWeek = thisWeek.clone().subtract(1, 'weeks')
const nextWeek = thisWeek.clone().add(1, 'weeks')
const thisMonth = thisWeek.format("YYYY-MM-[M]")
const thisYear = thisWeek.format("YYYY-[Y]")
-%>
---
date: <% tp.date.now("YYYY-MM-DD") %>
createdAt: <% tp.file.creation_date() %>
monthly: <% thisMonth %>
yearly: <% thisYear %>
---

<< [[<% previousWeek.format("YYYY-MM-[W]ww") %>]] || [[<% nextWeek.format("YYYY-MM-[W]ww") %>]] >>
[[<% thisMonth %>]]

```dataview
Table without id ("[["+file.name+"|"+dateShort+"]]") as "Daily Summaries", DailySummary as " "
FROM "planner/daily"
WHERE weekly = this.file.name
SORT file.name ASC
```

## End of week summary
- 

**Summarised summary**
- 

WeeklySummary::