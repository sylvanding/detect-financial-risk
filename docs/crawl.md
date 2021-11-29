# 数据获取

本文的样本基数为我国主板和中小企业板板块互联网上市企业，在[同花顺财经](http://www.10jqka.com.cn/)网站的“问财”板块处输入关键字“互联网”，获取414条我国A股市场上和互联网相关的公司股票代码。经统计，其中2021年首次被处以退市风险警示的公司有20家（包括ST和\*ST），非ST公司394家。利用Python爬虫技术进行数据爬取，从沪深上市企业搜索网站——[前瞻眼](https://stock.qianzhan.com/)获取了上述公司2018年年度财务报表和非财务数据等信息。

在剔除掉财务数据不完整个例后，对非ST企业进行随机采样，减少样本中非ST企业数，提升\*ST/ST企业比例，以防样本倾斜。最后，得到40家非ST企业和16家\*ST/ST企业作为研究样本。文献显示，T为公司首次被ST的年份，因为在T-3年公司出现首次亏损才可能会被ST，所以T-3年的财务数据预测准确性在T-1到T-5年限内最高。故本文所搜集的数据均来自于样本2018年年度财务报表。

## 爬虫逻辑

1. 访问主页 https://stock.qianzhan.com ，在排行榜  `<div class="index-bangdan" id="div_bangdanlist">` 中的 今日涨幅榜  `<div style="display:block" idx="1">` 查找每个 `<tr>` 树中第二个子 `<td>` ，提取文本内容，获得每日涨幅前15条股票涨幅最大的股票代码，如 `301083.SZ`. 
2. 观察 `N百胜 301083.SZ` 个股公司财务摘要页面信息，其url：`https://stock.qianzhan.com/hs/caiwuzhaiyao_301083.SZ.html`，那么构造基于股票公司代码的通用url：`'https://stock.qianzhan.com/hs/caiwuzhaiyao_%s.html' % code` , `code` 为对应股票公司的代码. 
3. 观察财务报表，按年度堆叠公司数据，生成excel表格。

例: 301083.SZ 个股财务报表（报告期）

|                             | 2021年中报 | 2021年一季报 | ...  | 2020年三季报 |
| --------------------------- | ---------- | ------------ | ---- | ------------ |
| 每股收益 - 基本(元)         | 0.12       | 0.06         | ...  | 0.11         |
| 每股收益 - 稀释(元)         | 0.12       | 0.06         | ...  | 0.11         |
| 每股收益 - 期末股本摊薄(元) | 0.12       | 0.06         | ...  | 0.11         |
| ...                         | ...        | ...          | ...  | ...          |
| 每股净资产BPS(元)           | 1.53       | 1.48         | ...  | 1.36         |

例: 按年度堆叠 301083.SZ 个股财务报表

| 股票代码  | 时间         | 每股收益 - 基本(元) | ...  | 每股净资产BPS(元) |
| --------- | ------------ | ------------------- | ---- | ----------------- |
| 301083.SZ | 2021年中报   | 0.12                | ...  | 1.53              |
| 301083.SZ | 2021年一季报 | 0.06                | ...  | 1.48              |
| ...       | ...          | ...                 | ...  | ...               |
| 301083.SZ | 2020年三季报 | 0.11                | ...  | 1.36              |

## 爬虫实现

```python
import requests
import pandas as pd
from bs4 import BeautifulSoup
from requests import RequestException
from time import sleep


def getRankList():
    """
    返回每日前15条股票涨幅最大的公司代码
    :return: 公司代码
    """
    url = 'https://stock.qianzhan.com'
    try:
        res = requests.post(url)
        if not res.status_code == 200:
            raise RequestException
        soup = BeautifulSoup(res.text, 'lxml')
        table = soup.find_all('div', {'idx': '1'})[0]
        codes = table.find_all('td')[1::8]
        for code in codes:
            yield code.get_text()
    except RequestException:
        print('Failed to get rank list.')
        exit(0)


def getStockData(code):
    """
    返回对应股票代码的财务摘要数据(字典)
    :param code: 股票代码
    :return: 财务摘要数据(字典)
    """
    stock = {'股票代码': code}
    url = 'https://stock.qianzhan.com/hs/caiwuzhaiyao_%s.html' % code
    res = ''
    try:
        res = requests.post(url)
        if not res.status_code == 200:
            raise RequestException
    except RequestException:
        print('Failed to get stock data of %s.' % code)
        return stock
    soup = BeautifulSoup(res.text, 'lxml')
    if not soup.find_all('table', {'id': 'tblBody1'}):
        print('Stock %s has no data!' % code)
        return stock
    table = soup.find_all('table', {'id': 'tblBody1'})[0]
    times = table.find_all('th')
    times = [t.get_text() for t in times[1:]]
    tdleft = table.find_all('td', {'class': 'td-left'})
    tdleft = [(tl.get_text()).strip() for tl in tdleft]
    trs = table.find_all('tr')[1:]
    stock_data = [[td.get_text() for td in tr.find_all('td')[1:]] for tr in trs]
    for Index, time in enumerate(times):
        stock['时间'] = time
        for Ind, singleRow in enumerate(stock_data):
            stock[tdleft[Ind]] = singleRow[Index]
        yield stock.copy()
    sleep(0.5)


if __name__ == '__main__':
    data = []
    for code in getRankList():
        print('Crawling stock %s...' % code)
        for oneData in getStockData(code):
            data.append(oneData)
    pd.DataFrame(data).to_excel('财务摘要（报告期）.xlsx', index=False)
```

*python3.8 with models: requests, pandas, bs4...*

**输出范例：**

```
Crawling stock 301083.SZ...
Stock 301083.SZ has no data!
Crawling stock 300672.SZ...
Crawling stock 300537.SZ...
Crawling stock 300336.SZ...
Crawling stock 300052.SZ...
Crawling stock 688028.SH...
Crawling stock 300619.SZ...
Crawling stock 300444.SZ...
Crawling stock 300437.SZ...
Crawling stock 300223.SZ...
Crawling stock 300069.SZ...
Crawling stock 688301.SH...
Crawling stock 300346.SZ...
Crawling stock 688630.SH...
Crawling stock 002615.SZ...
```

| 股票代码  | 时间         | 每股收益 - 基本(元) | 每股收益 - 稀释(元) | 每股收益 - 期末股本摊薄(元) | 每股净资产BPS(元) | ...  | 每股营业收入(元) |
| --------- | ------------ | ------------------- | ------------------- | --------------------------- | ----------------- | ---- | ---------------- |
| 300672.SZ | 2021年中报   | -0.06               | -0.06               | -0.06                       | 6.93              | ...  | 5.28             |
| 300672.SZ | 2021年一季报 | 0.01                | 0.01                | 0.01                        | 7.00              | ...  | 2.28             |
| 300537.SZ | 2021年中报   | -0.02               | -0.02               | -0.02                       | 5.69              | ...  | 1.71             |
| 300537.SZ | 2021年一季报 | 0.04                | 0.04                | 0.04                        | 5.76              | ...  | 0.80             |
| ...       | ...          | ...                 | ...                 | ...                         | ...               | ...  | ...              |
| 002615.SZ | 2019年中报   | 0.13                | 0.13                | 0.13                        | 2.06              | ...  | 2.06             |
| 002615.SZ | 2019年一季报 | 0.03                | 0.03                | 0.03                        | 2.04              | ...  | 0.96             |

*财务摘要（报告期）.xlsx*