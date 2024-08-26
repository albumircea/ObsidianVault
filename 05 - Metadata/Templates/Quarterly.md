---
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
tags:
  - quarterly_note
---

<%*
  let title = tp.file.title 
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
# <%* tR += `${title}` %>

"Previous Quarter - Next Quarter" Internal Links
<< [[<%fileDate = moment((`${title}`), 'YYYY-[Q]Q').subtract(1, 'quarter').format('YYYY-[Q]Q')%>|Previous Quarter]] | [[<%fileDate = moment((`${title}`), 'YYYY-[Q]Q').add(1, 'quarter').format('YYYY-[Q]Q')%>|Next Quarter]] >>

"Months of the Quarter" Callout
> [!month]- Months of the Quarter
> [[<%tp.date.now("YYYY-MM", "P-2M")%>|1st Month]]
> [[<%tp.date.now("YYYY-MM", "P-1M")%>|2nd Month]]
> [[<%tp.date.now("YYYY-MM")%>|3rd Month]]
