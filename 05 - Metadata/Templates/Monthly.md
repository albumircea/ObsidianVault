<%*
let title = tp.file.title 
if (title.startsWith("Untitled")) 
{
	title = await tp.system.prompt("Title");
	await tp.file.rename(`${title}`);
}
moment.locale("gb");
const month = title
const thisMonth = window.moment(month,"YYYY-MM");
const previousMonth = thisMonth.clone().subtract(1, 'months')
const nextMonth = thisMonth.clone().add(1, 'months')
const thisQuarter = thisMonth.format("YYYY-[Q]Q");
const thisYear = thisMonth.format("YYYY-[Y]");
%>---
date: <% moment(thisMonth, "YYYY-MM").format("YYYY-MM-DD") %>
creation date: <% tp.file.creation_date("dddd Do MMMM YYYY") %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY") %>
tags:
  - daily_note
quarterly: <% thisQuarter %>
yearly: <% thisYear %>
---

# <% moment(thisMonth,'YYYY-MM').format("YYYY MMMM") %>

 [[<% previousMonth.format("YYYY-MM-DD") %> |⬅️ Prev Month]] | [[<% nextMonth.format("YYYY-MM-DD") %> | Next Month ➡️]] [[<% thisQuarter %> | This Quarter]]

```dataview
Table without id ("[["+file.name+"]]") as "Weekly Summaries"
FROM "04 - Journaling/02-Weekly"
WHERE contains(monthly,this.file.name)
SORT file.name ASC
```