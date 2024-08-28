---
cssclasses: dashboard
---

```tracker
searchType: task.done
folder: /04 - Journaling/01-Daily
searchTarget: read
datasetName: Read
startDate: 2024-07-01
month:
	 startWeekOn: 'Mon'
```


Vault Upgrade Tutorials

Daily Notes: [Link](https://www.youtube.com/watch?v=OujrHLGDBFA&list=PL1AUrVDGELNQHG8hPEJcFwCtgEhcNj9MW&index=7) Foarte bun tutorial pentru cum poti sa iei notite si highlighturi
Cheatsheets for: [dataviewJS, dataview, Others as needed]


# Work
- 🗒️ Notes
	- `="[[" + dateformat(date(today), "yyyy-MM-dd") + "| Today ]]"`
	- `="[[" + dateformat(date(today), "yyyy-wW")+"| This Week]]"`
	- `="[[" + dateformat(date(today), "yyyy-MM")+"| This Month]]"`
- 👨‍👩‍👦 Plan
	- [[Kanban Immediate]]
	
- 🌅 Current Projects 
	- [[Hedge]]
	- [[Hedge Canvas.canvas|Hedge Canvas]]



# Personal Development


- 🏡 Learning
	- [[Bathroom Remodel]]
	- [[Paint entryway]]
	- [[Research building Garage]] 
 - ✍️ Reading
	- [[📚 Books MOC]]
	- Currently Reading: [[2024-08-26📚 How to Take Smart Notes]]
- 📚 TODO
	

# Personal Projects
- 💼 Projects
	- [[Cloud backup]]
	- [[Firewall upgrades]]
	- [[IT Cybersecurity training]]
- 💰 Budget review
	- [[Q1 2022]]
	- [[Q2 2022]]
	- [[Q3 2022]]
	- [[Q4 2022]]
- 👥 Personnel Review
	- [[Sally Smith]]
	- [[Bill Hansen]]
	- [[Brad Jefferson]]
	- [[Olga Olson]]

# Vault Info
- 🗄️ Recent file updates
 `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(4).file.link)`
- 🔖 Tagged:  favorite 
 `$=dv.list(dv.pages('#favorite').sort(f=>f.file.name,"desc").limit(4).file.link)`
- 〽️ Stats
	-  File Count: `$=dv.pages().length`
	-  Personal recipes: `$=dv.pages('"Family/Recipes"').length`