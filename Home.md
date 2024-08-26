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

# Personal
- 🗒️ Notes
	- `="[[" + dateformat(date(today), "yyyy-MM-dd") + "| Today ]]"`
	- `="[[" + dateformat(date(today), "yyyy-wW")+"| This Week]]"`
	- `="[[" + dateformat(date(today), "yyyy-MM")+"| This Month]]"`
- 👨‍👩‍👦 Objectives
	- [[Family Recipes]]
	- [[Family Calendar]]
	- [[Education Plan]]
	- [[Yearly Budget]]
- 🌅 Exotic Vacations 
	- [[Peru]]
	- [[Austria]]
	- [[Texas]]  
- 🎥 Movies to Watch
	- [Sleepless in Seattle](https://www.imdb.com/title/tt0108160/)
	- [Joe vs the Volcano](https://www.imdb.com/title/tt0099892/)

 # Personal Projects
- 🏡 Remodeling Projects
	- [[Bathroom Remodel]]
	- [[Paint entryway]]
	- [[Research building Garage]] 
 - ✍️ Writing Projects
	- [[5 ways to love PKM more]]
	- Read: [Obisidian core principles](https://tfthacker.medium.com/obsidian-understanding-its-core-design-principles-7f3fafbd6e36)
- 📚 Learning
	- [[Early American History]]
	- [[Spanish - Entry Level]]

# Work
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





[TUTOIRIAL](https://forum.obsidian.md/t/id-like-to-link-to-my-current-weekly-quarteryly-and-yearly-note-on-my-home-page/61276)



`="[[" + dateformat(date(today), "yyyy-MM-dd") + "|DAILY NOTE ]]"`



`="[[" + dateformat(date(today), "yyyy-wW")+"| Weekly Note]]"`

`="[[" + dateformat(date(today), "yyyy-MM")+"| This Month]]"`

