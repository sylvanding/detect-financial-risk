# Detect Financial Risk

![version](https://img.shields.io/badge/version-1.0-da282a) ![school](https://img.shields.io/badge/school-华侨大学-blueviolet) ![auth](https://img.shields.io/badge/auth-丁纪翔,安紫淇,郝雨泽-orange) ![date](https://img.shields.io/badge/date-20211129-brightgreen)

**This pre-warning system is basically used to help Internet companies and investors detect latent financial risk.**

## 我们做了些什么？

近年来， 随着宽带中国战略的落幕与大数据战略的持续实施，我国对于信息技术产业的关注有增无减。 在互联网+政策的支持下，互联网企业数量激增。 然而，针对中国市场的互联网企业进行特色化设计且真正落地的财务预警模型较少， 现存的大多数预警模型与互联网企业的独特运营模式和财务特性匹配度不足， 对于互联网企业发生财务危机的预警结果精度低。 基于财务危机预警领域研究现状，我们将上市公司在股市中被特殊处理的情况（ST）视作发生财务危机， 从同花顺财经网站和前瞻眼财报数据库爬取相关数据，获得了我国A股互联网上市公司财务危机发生前一年的财务数据， 总结和归纳互联网企业特点，针对性地选取互联网企业的财务和非财务预警21个指标进行因子分析。 在PAC数据降维后，搭建BP神经网络模型，Z-Score标准化样本，7:3划分训练集和测试集， 分别设置隐层、输出层激活函数为tanh和softmax，使用截断高斯分布初始化权值矩阵，添加L1-L2正则化项， 对模型参数进行训练和调优，最终，编译所得模型在F1-Score指标和AUC值上表现良好， 得出适合于中国互联网企业的财务危机预警模型。利用该模型制作财务风险评估网站， 输入互联网企业数据指标后，网站就能给出的评分结果，以此判断财务危机的严重程度， 为大中小互联网企业的财务健康情况提供指引，为公司管理者和投资者规避风险提供了保障。

## 研究论文

丁纪翔, 郝雨泽, 安紫淇. 基于因子分析和BP神经网络模型的互联网上市公司财务危机预警实证研究[J]. 中国科技信息, 2021, 32(11):142-144

## GitHub 开源

https://github.com/sylvanding/detect-financial-risk/

## 项目部署

http://eco.sylvanding.online

网站使用Flask框架搭建，采用uWSGI+Nginx部署方案，基本实现了财务危机预测的功能，您可以通过Demo选择我们预置的互联网企业数据。

## 开发文档

http://sylvanding.github.io/detect-financial-risk/

## 项目成员

* 安紫淇 [i]
* 郝雨泽 [i]
* 丁纪翔 [ii]

---

[i]. 华侨大学 国际学院，泉州 362011

[ii]. 华侨大学 计算机科学与技术学院，厦门 361021

## 文件说明

### model

`model` 文件夹主要为模型训练和测试的代码和数据集。`BPNNsV02.ipynb` 为模型生成代码，`BPNNsV02.html` 为对应html格式文件；`股票因子.xlsx` 为训练样本；`ModelDescription.xlsx` 为BP神经网络模型各层的权重和偏移量；`model.h5` 为模型文件。

### website

`website` 文件夹主要用以网站的搭建。网站使用Flask开发，`app.py` 为项目入口；`requirements.txt` 为所需的库；`ComponentScoreCoefficient.csv` 为因子分析阶段所得系数矩阵；`ZscoreMeanandStd.csv` 为Zscore标准化所需的均值和标准差；`Demo_data.xlsx` 为演示用互联网企业的数据；`static` 和 `templates` 文件夹下内容分别为网页的静态资源和模版。
