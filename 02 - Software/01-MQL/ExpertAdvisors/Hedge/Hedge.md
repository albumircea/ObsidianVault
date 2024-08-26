---
creation date: 2024-08-16 18:21
modification date: Friday 16th August 2024 18:21:30
tags:
---


## Algorithm


**Poate e o idee buna sa fac o clasa noua din care sa mostenesc SmartBasic si sa continui acolo codu**
Sa fac curat in metodele care nu folosesc lacatul ca sa las clean SmartBasic



1. Vad daca sunt in drawdown -> Pun o linie care imi arata cand intru in drawdown
2. Daca ating pretul respectiv atunci intru in lacat
3. Intrarile ulterioare se fac la pretul de referinta unde este linia de intrare in lacat
4. Daca nu gaseste linia nici pe grafic, nici in globalVariables atunci pune linia unde este drawdownul din parametrii si ramane ala pretul de referinta, mai departe trebuie mutata linia de lacat


 



PROBLEME POSIBILE
- Ce se intampla daca imi  scoate valorile din GlobalVariables(trebuie testat)
	- O posibila solutie poate sa fie sa scriu valorile si intr un fisier, fisier care se va putea muta in caz de orice



**TODO**

- [ ] Switching timeframes -> remember state