---
creation date: 2024-08-01 17:30
modification date: Thursday 1st August 2024 17:30:58
tags:
---



## Stocks Course

### Box-System
**Trend Structure** -> two higheś highs and higher lows
sma-momentum filter

## Stocks Indicators


```typescript

//script based in:
// original John Carter's ideas (SQUEEZE & SQUEEZE PRO) https://www.simplertrading.com/
// LazyBear's script (Squeeze Momentum Indicator) https://www.tradingview.com/script/nqQ1DT5a-Squeeze-Momentum-Indicator-LazyBear/


// There are 3 levels of compression:
// Level 1: ORANGE, the lesser compresion level
// Level 2: RED, the normal level marked by the original squeeze indicator
// Level 3: YELLOW, the max compression level
// The more the compression the bigger the after move

study(title="SKS_SQZPRO", shorttitle="SQZPRO", overlay=false, precision=1)

source = close
length = 20
ma = sma(source, length)
devBB = stdev(source, length)
devKC = sma(tr, length)
//Bollinger 2x
upBB = ma + devBB * 2
lowBB = ma - devBB * 2
//Keltner 2x
upKCWide = ma + devKC * 2
lowKCWide = ma - devKC * 2
//Keltner 1.5x
upKCNormal = ma + devKC * 1.5
lowKCNormal = ma - devKC * 1.5
//Keltner 1x
upKCNarrow = ma + devKC
lowKCNarrow = ma - devKC
  
sqzOnWide = lowBB >= lowKCWide and upBB <= upKCWide  //WIDE SQUEEZE: ORANGE
sqzOnNormal = lowBB >= lowKCNormal and upBB <= upKCNormal  //NORMAL SQUEEZE: RED
sqzOnNarrow = lowBB >= lowKCNarrow and upBB <= upKCNarrow  //NARROW SQUEEZE: YELLOW
sqzOffWide = lowBB < lowKCWide and upBB > upKCWide  //FIRED WIDE SQUEEZE: GREEN
noSqz = sqzOnWide == false and sqzOffWide == false  //NO SQUEEZE: BLUE
//Momentum Oscillator
mom = linreg(source - avg(avg(highest(high, length), lowest(low, length)), sma(close, length)), length, 0)
//Momentum histogram color
mom_color = iff(mom > 0, iff(mom > nz(mom[1]), color.aqua, color(#0000ff)), iff(mom < nz(mom[1]), color(#ff0000), color(#ffeb3b)))
barcolor(mom_color, title="MOM Bars")
//Squeeze Dots color
sq_color = noSqz ? color.blue : sqzOnNarrow ? color.yellow :
sqzOnNormal ? color(#ff0000) : sqzOnWide ? color.gray : color(#00ff00)

plot(mom, title='MOM', color=mom_color, style=plot.style_histogram, linewidth=5
plot(0, title='SQZ', color=sq_color, style=plot.style_circles,  linewidth=3)
plot(mom, title='MOMLine', color=color(#b2b5be), style=plot.style_line, linewidth=2)
``````




## Stock Quizes
>[!example]- Price Action Pro Quiz
> - Q: **If the price is dancing above the support zone but hasn't broken below it, what should we do?**
> A: Do nothing
> - Q: **What's a trend?**
> A: trend is the series of higher high and higher low in uptrend and lower high and lower low in a downtrend
> - Q: **Which of these is a valid box?**
> A: Base, 50ma box, 21ma box, 9ma box
> - Q: **Which box breakout is the most reliable for a multi day swing?**
> A: 50ma box breakout>
> - Q: **If you're looking for multi-day swings, what timeframe should you be using for searching setups?**
> A: Daily
> - Q: **What tickers should you use to gauge the overall market environment?**
>A: SPY and QQQ
> - Q: **Which box breakout is the most reliable for a multi day swing?**
>50ma box breakout
> - Q: **How do you assess the strength of a specific sector in the overall market context?**
>A: By comparing it to the main index
---
>[!example]- Trading Basics Quiz
> - Q: **What's the option available to the buyer of a put on expiration?**
> A: Sell the underlying to the seller at the strike price
> - Q: **What factors affect the price of an option?**
> A: Stock price, time left till expiration, implied volatility
> - Q: **If you would like to have your trade executed immediately, what order type will you choose**
> A: Market
> - Q: **When buying a call or a put, what option should you choose?**
> A: Buy to Open
> - Q: *
> - *What is the etf ticker that allows you to trade Nasdaq-100?**
> A: QQQ
---
