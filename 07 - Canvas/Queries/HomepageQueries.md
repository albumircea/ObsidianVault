

# Heading 1

```dataview
Table tags, actual_RR, potential_RR
FROM #trade/confluence/poi_sweep

```



# Heading 2
```
TABLE Pro_Confluences, Counter_Confluences
FROM "04 - Journaling/01-Daily" 
WHERE contains(Pro_Confluences, "#confluence1") OR contains(Counter_Confluences, "#counter_confluence1")
```


``dataview
TABLE file.ctime, file.lists
FROM "04 - Journaling/01-Daily"
WHERE contains(file.tags, "#trade")
``




```dataviewjs
// Specify the main tags to search within
const mainTag = "#trade"; // Replace with your main tag

// Initialize an array to hold the results
let results = [];

// Specify the folder to search within, or remove to search all notes
const pages = dv.pages('"04 - Journaling/01-Daily"'); // Replace "folder_name" with the actual folder name

// Iterate over each page/note
pages.forEach(page => {
    // Initialize empty arrays for each section
    let tagSection1 = [];
    let tagSection2 = [];

    // Check if the file contains tags
    if (page.file.tags) {
        // Iterate over each tag in the file
        page.file.tags.forEach(tag => {
            // Group tags into sections based on the main tag and subtag
            if (tag.startsWith(mainTag + "/missed")) {
                tagSection1.push(tag);
            }
            if (tag.startsWith(mainTag + "/win")) {
                tagSection2.push(tag);
            }
        });
    }

    // Only include files that have at least one tag in either section
    if (tagSection1.length > 0 || tagSection2.length > 0) {
        results.push({
            fileName: page.file.link,
            tagSection1: tagSection1.join(", "),
            tagSection2: tagSection2.join(", ")
        });
    }
});

// Render the results as a table
dv.table(["File Name", "Tag Section 1", "Tag Section 2"], 
    results.map(result => [result.fileName, result.tagSection1, result.tagSection2])
);



```
