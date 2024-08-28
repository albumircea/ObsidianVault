---
aliases: ["📚 Books"]
---


# Books

```meta-bind-button
label: New Book
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05 - Metadata/Templates/Book.md
    folderPath: 01 - Sources/00-Books
    fileName: BookName
    openNote: true

```


[[Book| Books Template]]

## Books

```dataview
Table Date, Title, Author, Category, Status,
"<progress max=" + totalPages + " value=" + currentPage + "> </progress> " + round(currentPage/totalPages*100) + "%" as Progress

FROM "01 - Sources/00-Books"
SORT file.name DESC
```