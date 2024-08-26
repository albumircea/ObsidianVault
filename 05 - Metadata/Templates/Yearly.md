---
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
tags:
  - yearly_note
---

<%*
  let title = tp.file.title 
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
# <%* tR += `${title}` %>

"Previous Year - Next Year" Internal Links
<< [[<%fileDate = moment((`${title}`), 'YYYY').subtract(1, 'years').format('YYYY')%>|Previous Year]] | [[<%fileDate = moment((`${title}`), 'YYYY').add(1, 'years').format('YYYY')%>|Next Year]] >>

"Months of the Year" Callout
> [!year]- Months of the Year
> [[<%tp.date.now("YYYY-MM", "P-11M")%>|January]]
> [[<%tp.date.now("YYYY-MM", "P-10M")%>|February]]
> [[<%tp.date.now("YYYY-MM", "P-9M")%>|March]]
> [[<%tp.date.now("YYYY-MM", "P-8M")%>|April]]
> [[<%tp.date.now("YYYY-MM", "P-7M")%>|May]]
> [[<%tp.date.now("YYYY-MM", "P-6M")%>|June]]
> [[<%tp.date.now("YYYY-MM", "P-5M")%>|July]]
> [[<%tp.date.now("YYYY-MM", "P-4M")%>|August]]
> [[<%tp.date.now("YYYY-MM", "P-3M")%>|September]]
> [[<%tp.date.now("YYYY-MM", "P-2M")%>|October]]
> [[<%tp.date.now("YYYY-MM", "P-1M")%>|November]]
> [[<%tp.date.now("YYYY-MM")%>|December]]